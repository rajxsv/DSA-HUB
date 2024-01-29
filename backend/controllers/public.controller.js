import { Problem } from "../models/problem.model.js";
import { Post } from "../models/post.modal.js";
import "dotenv/config";

const paginatedProblems = async (req, res) => {
  try {
    const { page, pagesize } = req.query;
    console.log(page, pagesize);
    const problems = await Problem.find({}).sort("asc");

    const startIndex = (page - 1) * pagesize;
    const endIndex = page * pagesize;

    const problemsPerPage = problems.slice(startIndex, endIndex);
    const totalProblems = problems.length;

    res.status(200).json({ problemsPerPage, totalProblems });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Server issue" });
  }
};

const paginatedPosts = async (req, res) => {
  try {
    const { page, pagesize } = req.query;
    console.log(page, pagesize);
    const posts = await Post.find({}).sort("asc");

    const startIndex = (page - 1) * pagesize;
    const endIndex = page * pagesize;

    const postsPerPage = posts.slice(startIndex, endIndex);
    const totalPosts = posts.length;

    res.status(200).json({ postsPerPage, totalPosts });
  } catch (err) {
    res.status(400).json({ message: "Server issue" });
    console.log(err);
  }
};

const getAllProblems = async (req, res, next) => {
  let problems;
  try {
    problems = await Problem.find({}).sort({ id: "asc" }).lean();
    res.status(200).json({ problems });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "No Problems found" });
  }
};

const getProblemByID = async (req, res) => {
  const ID = req.params.id;
  let problem;
  try {
    problem = await Problem.findOne({ id: ID }).lean();
    res.status(200).json({ problem });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No Problem Found" });
  }
};

const addNewProblem = async (req, res) => {
  let problem = req.body.newProblem;
  try {
    const newProblem = new Problem(problem);
    await newProblem.save();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Bad Request" });
  }
};

const deleteProblemById = async (req, res) => {
  const ID = req.params.id;
  try {
    await Problem.deleteOne({ id: ID }).exec();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Bad Request" });
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("user");
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

export {
  getAllProblems,
  getProblemByID,
  addNewProblem,
  deleteProblemById,
  getPost,
  paginatedProblems,
  paginatedPosts,
};
