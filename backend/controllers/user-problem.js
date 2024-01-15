import { Problems as Problem } from "../models/problem.model.js";

export const getAllProblems = async (req, res, next) => {
  let problems;
  try {
    problems = await Problem.find({}).sort({ id: "asc" }).lean();
    res.status(200).json({ problems });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "No Problems found" });
  }
};

export const getProblemByID = async (req, res) => {
  let problem;
  const ID = req.params.id;
  try {
    problem = await Problem.findOne({ id: ID }).lean();
    res.status(200).json({ problem });
  } catch (error) {
    console.log(error);
    if (!problem) res.status(404).json({ message: "No Problem Found" });
  }
};

export const addNewProblem = async (req, res) => {
  let problem = req.body.newProblem;
  try {
    const newProblem = new Problem(problem);
    await newProblem.save();
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Bad Request" });
  }
  res.status(200).json({ message: "Success" });
};

export const deleteProblemById = async (req, res) => {
  const ID = req.params.id;
  try {
    await Problem.deleteOne({ id:ID }).exec();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: "Bad Request" });
  }
};

export const editProblemById = async (req, res) => {
  const filter = {id:req.body.id};
  const update = req.body.problemWithoutId;
  let status;
  try {
    status = await Problem.findOneAndUpdate(filter, update).exec();
  } catch (error) {
    console.log(error);
  }
  if(!status){
    return res.status(404).json({ message: "Bad" });
  }

  return res.status(200).json({ message: "Success" });
};
