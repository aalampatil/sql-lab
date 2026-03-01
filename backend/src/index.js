import "./config/env.js";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("index.js connectDb on error", error);
    });
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("index.js connectDB failed", error);
  });
