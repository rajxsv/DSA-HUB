import { Problems as Problem } from "../models/problem.model.js"
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const registerUser = async (req, res) => {
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

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const existinguser = await User.findOne({ email }).lean();
  if (!existinguser) {
    res.status(400).json({ message: "User does not exist" });
  }

  try {
    const userHashedPassword = existinguser.password;
    const isValid = await bcrypt.compare(password, userHashedPassword);

    if (!isValid)
      res.status(400).json({ message: "Please recheck your password" });

    const token = jwt.sign(
      {
        email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    console.log("Logging in User");

    res.status(200).json({
      token,
      message: "Your are Logged In !",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

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
  const ID = req.params.id;
  let problem;
  try {
    problem = await Problem.findOne({ id: ID }).lean();
    res.status(200).json({problem});
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No Problem Found" });
  }
};

export const addNewProblem = async (req, res) => {
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
  try {
    await Problem.findOneAndUpdate(filter, update).exec();
    res.status(404).json({ message: "Bad" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Success" });
  }

};


