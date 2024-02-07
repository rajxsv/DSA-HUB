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
  logOutUser,
} from "../controllers/user.controller.js";
import { auth } from "../controllers/auth.controller.js";

export const userRouter = express.Router();
  
userRouter.get("/user/getproblems", auth, getUserProblems);

userRouter.post("/user/addproblem", auth, addUserProblem);
userRouter.post('/user/addpost', auth, addUserPost);
userRouter.post('/user/likepost', auth, likeUserPost);
userRouter.post('/user/dislikepost', auth, dislikeUserPost);

userRouter.put("/user/editproblem/:id", auth, editUserProblem);
userRouter.delete("/user/logout", auth, logOutUser);

userRouter.delete("/user/deleteproblem/:id", auth, deleteUserProblem);
userRouter.delete("/user/deletepost/:id", auth, deleteUserPost);
