export const challengeData = [
  {
    id: 1,
    type: "Querying Data",
    challengeTitle: "SELECT All Columns",
    description:
      "Learn to retrieve all data from a table using SELECT *. The users table contains 15 customers with personal information.",
    info: "SELECT * retrieves every column from a table. We have 15 users in our database.",
    task: "Select all columns from the users table to see customer data including id, name, email, phone, age, country, and city.",
  },
  {
    id: 2,
    type: "Querying Data",
    challengeTitle: "SELECT Specific Columns",
    description:
      "Learn to retrieve only the columns you need. Sometimes you only want certain fields, not all data.",
    info: "Instead of retrieving all columns with *, specify exactly which ones you need. This reduces data transfer and improves performance.",
    task: "Select only the name and email columns from the users table.",
  },
  {
    id: 3,
    type: "Sorting Data",
    challengeTitle: "ORDER BY Ascending",
    description:
      "Sort results in ascending order. The products table has 20 items with prices ranging from $9.99 to $999.99.",
    info: "ORDER BY sorts results. ASC is the default (low to high). This helps find the cheapest products",
    task: "Select all columns from the products table and sort by price in ascending order (cheapest first).",
  },
];
