import express from "express";
import {
  addNewProblem,
  addUserProblem,
  deleteProblemById,
  deleteUserProblem,
  editProblemById,
  getAllProblems,
  getProblemByID,
  getUserProblems,
  loginUser,
  registerUser,
} from "../controllers/user-problem.js";

export const router = express.Router();

// user routes , auth in dev

router.get("/user/getproblems/:id", getUserProblems);

router.post("/user/addproblem/:id", addUserProblem);
router.put("/user/editproblem/:id", editProblemById);

router.delete("/user/deleteproblem/:id", deleteUserProblem);
// public routes

router.get("/", getAllProblems);
router.get("/:id", getProblemByID);

router.post("/post", addNewProblem);
router.post("/login", loginUser);
router.post("/register", registerUser);

router.delete("/delete/:id", deleteProblemById);
