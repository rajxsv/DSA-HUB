import { Problem } from "../models/problem.model.js";
import { Post } from "../models/post.modal.js";
import "dotenv/config";
import redisClient from "../db/redis.js";

const paginatedProblems = async (req, res) => {
  try {
    const { page, pagesize } = req.query;
    const key = `problems_${page}_${pagesize}`;

    let cachedProblems = await redisClient.get(key);

    if (cachedProblems) {
      cachedProblems = JSON.parse(cachedProblems);
      const { problemsPerPage, totalProblems } = cachedProblems;
      console.log("sending cached data");
      res.status(200).json({ problemsPerPage, totalProblems });
    } else {
      console.log(page, pagesize);
      const problems = await Problem.find({}).sort("asc");

      const startIndex = (page - 1) * pagesize;
      const endIndex = page * pagesize;

      const problemsPerPage = problems.slice(startIndex, endIndex);
      const totalProblems = problems.length;

      await redisClient.set(
        key,
        JSON.stringify({
          problemsPerPage,
          totalProblems,
        })
      );

      res.status(200).json({ problemsPerPage, totalProblems });
    }
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

    if (!postsPerPage) {
      res.status(200).json({ message: "No Problems found" });
    }

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
  console.log(ID);
  let problem;
  try {
    problem = await Problem.findById(ID);
    console.log(problem);
    res.status(200).json({ problem });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No Problem Found" });
  }
};

const addNewProblem = async (req, res) => {
  let problem = req.body.newProblem;
  console.log(problem);
  problem = { ...problem, user: req.user._id };
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

const search = async (req, res) => {
  try {
    const { page, query } = req.query;
    console.log(page, query);

    const totalProblems = await Problem.countDocuments({
      $or: [
        { title: { $regex: new RegExp(query, "i") } },
        { description: { $regex: new RegExp(query, "i") } },
      ],
    });

    let skip = (page - 1) * 10;
    if (totalProblems < skip) {
      skip = 0;
    }
    const problemsPerPage = await Problem.find({
      $or: [
        { title: { $regex: new RegExp(query, "i") } },
        { description: { $regex: new RegExp(query, "i") } },
      ],
    })
      .skip(skip)
      .limit(10);

    res.status(200).json({ problemsPerPage, totalProblems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
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
  search,
};
