import express from "express";
import {
  addUserPost,
  addUserProblem,
  deleteUserPost,
  deleteUserProblem,
  dislikeUserPost,
  editUserProblem,
  getUserProblems,
  likeUserPost,
} from "../controllers/user.controller.js";
import { auth } from "../controllers/auth.controller.js";

export const userRouter = express.Router();

userRouter.get("/user/getproblems/:id", auth, getUserProblems);

userRouter.post("/user/addproblem/:id", auth, addUserProblem);
userRouter.post('/user/addpost/:id', auth, addUserPost);
userRouter.post('/user/likepost', auth, likeUserPost);
userRouter.post('/user/dislikepost', auth, dislikeUserPost);

userRouter.put("/user/editproblem/:id", auth, editUserProblem);

userRouter.delete("/user/deleteproblem/:id", auth, deleteUserProblem);
userRouter.delete("/user/deletepost/:id", auth, deleteUserPost);
