import mongoose from "mongoose";

const ColumnSchema = new mongoose.Schema(
  {
    columnName: String,
    dataType: String,
  },
  { _id: false },
);

const TableSchema = new mongoose.Schema(
  {
    tableName: String,
    columns: [ColumnSchema],
    rows: [mongoose.Schema.Types.Mixed],
  },
  { _id: false },
);

const AssignmentSchema = new mongoose.Schema(
  {
    challengeId: { type: Number, unique: true }, // important
    type: String,
    challengeTitle: String,
    description: String,
    info: String,
    task: String,
    sampleTables: [TableSchema],
    expectedOutput: {
      type: { type: String },
      value: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true },
);

export const AssignmentModel = mongoose.model("Assignment", AssignmentSchema);
