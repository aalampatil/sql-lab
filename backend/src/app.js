import express from "express";
import cors from "cors";
import { queryRouter } from "./routes/query.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.CLIENT,
    ],
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use("/api/query", queryRouter);
// app.use("/api/user")
export { app };
