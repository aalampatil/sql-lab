import { AssignmentModel } from "../models/assignment.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { sandboxPool } from "../db/postgres.js";

export const getAllChallenges = asyncHandler(async (req, res) => {
  const challenges = await AssignmentModel.find({}).sort({ challengeId: 1 });

  if (challenges.length === 0) {
    return res
      .status(404)
      .json(new ApiError(404, "failed to fetch challenges"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, challenges, "Challenges fetched"));
});

export const executeQuery = async (req, res) => {
  const { challengeId, query } = req.body;
  console.log(challengeId, query);

  const client = await sandboxPool.connect();

  //only Select is allowed
  const trimmedQuery = query.trim().toLowerCase();
  if (!trimmedQuery.startsWith("select")) {
    return res.status(400).json({
      success: false,
      message: "Only SELECT queries are allowed.",
    });
  }

  const schemaName = `sandbox_${Date.now()}_${Math.floor(
    Math.random() * 1000,
  )}`;

  try {
    const challenge = await AssignmentModel.findOne({ challengeId });

    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }

    // schema
    await client.query(`CREATE SCHEMA ${schemaName}`);
    await client.query(`SET search_path TO ${schemaName}`);

    // tables + insert data
    for (const table of challenge.sampleTables) {
      const columnsSQL = table.columns
        .map((col) => `${col.columnName} ${col.dataType}`)
        .join(", ");

      await client.query(`CREATE TABLE ${table.tableName} (${columnsSQL});`);

      for (const row of table.rows) {
        const keys = Object.keys(row);
        const values = Object.values(row);
        const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");

        await client.query(
          `INSERT INTO ${table.tableName} (${keys.join(
            ",",
          )}) VALUES (${placeholders});`,
          values,
        );
      }
    }

    // execute user query
    const result = await client.query(query);

    // results
    const expected = challenge.expectedOutput.value;

    const normalize = (rows) =>
      rows
        .map((row) =>
          Object.keys(row)
            .sort()
            .reduce((acc, key) => {
              acc[key] = row[key];
              return acc;
            }, {}),
        )
        .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));

    const isCorrect =
      JSON.stringify(normalize(result.rows)) ===
      JSON.stringify(normalize(expected));

    return res.json({
      success: isCorrect,
      result: result.rows,
      message: isCorrect ? "Correct " : "Try again",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  } finally {
    // cleanup schema after execution
    try {
      await client.query(`DROP SCHEMA IF EXISTS ${schemaName} CASCADE`);
    } catch (err) {
      console.error("Schema cleanup failed:", err.message);
    }
    client.release();
  }
};
