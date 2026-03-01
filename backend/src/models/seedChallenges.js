import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import { AssignmentModel } from "./assignment.model.js";
import { connectDB } from "../db/db.js";
connectDB();

const assignments = [
  {
    challengeId: 1,
    type: "Querying Data",
    challengeTitle: "SELECT All Columns",
    description: "Learn to retrieve all data from a table using SELECT *.",
    info: "SELECT * retrieves every column from a table.",
    task: "Select all columns from the users table.",

    sampleTables: [
      {
        tableName: "users",
        columns: [
          { columnName: "id", dataType: "INTEGER" },
          { columnName: "name", dataType: "TEXT" },
          { columnName: "email", dataType: "TEXT" },
          { columnName: "phone", dataType: "TEXT" },
          { columnName: "age", dataType: "INTEGER" },
          { columnName: "country", dataType: "TEXT" },
          { columnName: "city", dataType: "TEXT" },
        ],
        rows: [
          {
            id: 1,
            name: "John",
            email: "john@mail.com",
            phone: "111",
            age: 25,
            country: "USA",
            city: "NY",
          },
          {
            id: 2,
            name: "Jane",
            email: "jane@mail.com",
            phone: "222",
            age: 30,
            country: "UK",
            city: "London",
          },
        ],
      },
    ],

    expectedOutput: {
      type: "table",
      value: [
        {
          id: 1,
          name: "John",
          email: "john@mail.com",
          phone: "111",
          age: 25,
          country: "USA",
          city: "NY",
        },
        {
          id: 2,
          name: "Jane",
          email: "jane@mail.com",
          phone: "222",
          age: 30,
          country: "UK",
          city: "London",
        },
      ],
    },
  },

  {
    challengeId: 2,
    type: "Querying Data",
    challengeTitle: "SELECT Specific Columns",
    description: "Retrieve only required columns.",
    info: "Specify only needed fields instead of *.",
    task: "Select only the name and email columns from the users table.",

    sampleTables: [
      {
        tableName: "users",
        columns: [
          { columnName: "id", dataType: "INTEGER" },
          { columnName: "name", dataType: "TEXT" },
          { columnName: "email", dataType: "TEXT" },
        ],
        rows: [
          { id: 1, name: "John", email: "john@mail.com" },
          { id: 2, name: "Jane", email: "jane@mail.com" },
        ],
      },
    ],

    expectedOutput: {
      type: "table",
      value: [
        { name: "John", email: "john@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
      ],
    },
  },

  {
    challengeId: 3,
    type: "Sorting Data",
    challengeTitle: "ORDER BY Ascending",
    description: "Sort results in ascending order.",
    info: "ORDER BY sorts results.",
    task: "Select all columns from the products table and sort by price ASC.",

    sampleTables: [
      {
        tableName: "products",
        columns: [
          { columnName: "id", dataType: "INTEGER" },
          { columnName: "name", dataType: "TEXT" },
          { columnName: "price", dataType: "REAL" },
        ],
        rows: [
          { id: 1, name: "Laptop", price: 999.99 },
          { id: 2, name: "Mouse", price: 19.99 },
        ],
      },
    ],

    expectedOutput: {
      type: "table",
      value: [
        { id: 2, name: "Mouse", price: 19.99 },
        { id: 1, name: "Laptop", price: 999.99 },
      ],
    },
  },
];

await AssignmentModel.insertMany(assignments);

console.log("Assignments seeded successfully ✅");
process.exit();
