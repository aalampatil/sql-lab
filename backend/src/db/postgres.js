import pkg from "pg";
const { Pool } = pkg;

export const sandboxPool = new Pool({
  user: "postgres",
  host: "localhost",
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
