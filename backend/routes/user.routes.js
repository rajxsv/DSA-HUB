import express from "express";
import {
  addUserPost,
  addUserProblem,
  deleteUserProblem,
  dislikeUserPost,
  editUserProblem,
  getUserProblems,
  likeUserPost,
} from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.get("/user/getproblems/:id", getUserProblems);

userRouter.post("/user/addproblem/:id", addUserProblem);
userRouter.post('/user/addpost/:id', addUserPost);
userRouter.post('/user/likepost', likeUserPost);
userRouter.post('/user/dislikepost', dislikeUserPost);

userRouter.put("/user/editproblem/:id", editUserProblem);

userRouter.delete("/user/deleteproblem/:id", deleteUserProblem);
