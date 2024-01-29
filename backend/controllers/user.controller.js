import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { User } from "../models/user.model.js";
import { Problem } from "../models/problem.model.js";
import { Post } from "../models/post.modal.js";
import { Like } from "../models/like.modal.js";
import { Dislike } from "../models/dislike.modal.js";

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  const existinguser = await User.findOne({ email }).lean();

  if (existinguser) {
    res.status(400).json({ message: "User already exist" });
  }
  
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    console.log("New User Added");
    res.status(200).json({ message: "User created Successfully !" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "There was some problem creating user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existinguser = await User.findOne({ email }).lean();

    if (!existinguser) {
      res.status(400).json({ message: "User does not exist" });
    }

    const userHashedPassword = existinguser.password;
    const isValid = bcrypt.compare(password, userHashedPassword);

    if (!isValid) {
      res.status(400).json({ message: "Please recheck your password" });
      return;
    }

    const token = jwt.sign(
      {
        id: existinguser._id,
      },
      process.env.SECRET_KEY
    );
    const user = await User.findOne({ email }).select("-password");

    console.log("Logging in User");

    res.clearCookie(String(existinguser._id));

    res
      .cookie(String(existinguser._id), token, {
        path: "/",
        httpOnly: true,
      })

    console.log(res);

    res.status(200).json({
      token,
      user,
      message: "Your are Logged In !",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

const logOutUser = (req, res) => {
  try {
    const userId = req.user._id;
    res.clearCookie(String(userId));
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server Issue" });
  }
};

const getUserProblems = async (req, res) => {
  try {
    const _id = req.user._id;
    const user = await User.findById({ _id }).populate("problems");
    res.status(200).json(user.problems);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error in backend" });
  }
};

const addUserProblem = async (req, res) => {
  try {
    const _id = req.user._id;
    const { title, description, tags, links, done } = req.body;
    const newProblem = await Problem.create({
      title,
      description,
      tags,
      links,
      done,
    });
    const newProblemID = newProblem._id;
    await User.updateOne({ _id }, { $push: { problems: newProblemID } });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

const deleteUserProblem = async (req, res) => {
  try {
    const _id = req.params.id; // problem id
    await Problem.findOneAndDelete({ _id });
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "internal server error" });
  }
};

const editUserProblem = async (req, res) => {
  const filter = { _id: req.params.id };
  const update = req.body;
  try {
    await Problem.findOneAndUpdate(filter, update).exec();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Bad Request" });
  }
};

const addUserPost = async (req, res) => {
  try {
    const user = req.user;
    const userId = user._id;
    const { title, body } = req.body;

    const createdPost = await Post.create({ title, body, user });
    createdPost.user = userId;
    createdPost.save();

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.send(400).json({ message: "Internal Server Error" });
  }
};

const likeUserPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const { postId } = req.query;

    const isDisLiked = await Dislike.findOne({ user: userId, post: postId });
    if (isDisLiked) {
      await Dislike.deleteOne({ user: userId, post: postId });
      await Post.findByIdAndUpdate(postId, {
        $pull: { dislikes: isDisLiked._id },
      });
    }

    const isLiked = await Like.findOne({ user: userId, post: postId });

    if (isLiked) {
      res.status(200).json({ message: "post already liked" });
    } else {
      const like = await Like.create({ user: userId, post: postId });
      const likeId = like._id;

      await Post.findByIdAndUpdate(postId, { $push: { likes: likeId } });

      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

const dislikeUserPost = async (req, res) => {
  try {
    const userId = req.user._id;
    const { postId } = req.query;

    const isLiked = await Like.findOne({ user: userId, post: postId });
    if (isLiked) {
      await Like.deleteOne({ user: userId, post: postId });
      await Post.findByIdAndUpdate(postId, {
        $pull: { likes: isLiked._id },
      });
    }

    const isDisLiked = await Dislike.findOne({ user: userId, post: postId });

    if (isDisLiked) {
      res.status(200).json({ message: "post already disliked" });
    } else {
      const dislike = await Dislike.create({ user: userId, post: postId });
      const dislikeId = dislike._id;

      await Post.findByIdAndUpdate(postId, { $push: { dislikes: dislikeId } });

      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

const deleteUserPost = async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};



export {
  loginUser,
  registerUser,
  addUserProblem,
  editUserProblem,
  deleteUserProblem,
  getUserProblems,
  addUserPost,
  likeUserPost,
  dislikeUserPost,
  deleteUserPost,
  logOutUser,
};
