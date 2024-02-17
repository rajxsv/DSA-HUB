import express from "express";
import {
  addNewProblem,
  deleteProblemById,
  getAllProblems,
  getPost,
  getProblemByID,
  paginatedPosts,
  paginatedProblems,
  search,
} from "../controllers/public.controller.js";

import { loginUser, registerUser } from "../controllers/user.controller.js";

export const publicRouter = express.Router();
 
// public routes

publicRouter.get("/", getAllProblems);
publicRouter.get("/:id", getProblemByID);
publicRouter.get("/discuss/posts", getPost);
publicRouter.get("/public/problems", paginatedProblems);
publicRouter.get("/public/posts", paginatedPosts);
publicRouter.get("/public/search", search);

publicRouter.post("/post", addNewProblem);
publicRouter.post("/login", loginUser);
publicRouter.post("/register", registerUser);

publicRouter.delete("/delete/:id", deleteProblemById);
