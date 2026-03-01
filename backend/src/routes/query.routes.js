import { Router } from "express";
import {
  executeQuery,
  getAllChallenges,
} from "../controllers/query.controller.js";

export const queryRouter = Router();

queryRouter.get("/challenges", getAllChallenges);
queryRouter.post("/execute-query", executeQuery);
