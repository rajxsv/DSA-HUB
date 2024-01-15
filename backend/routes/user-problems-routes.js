import express from "express";
import { addNewProblem, deleteProblemById, editProblemById, getAllProblems, getProblemByID } from "../controllers/user-problem.js";

export const problemRouter = express.Router()

problemRouter.get('/',getAllProblems)
problemRouter.get('/:id',getProblemByID)

problemRouter.post('/post',addNewProblem)

problemRouter.delete("/delete/:id",deleteProblemById)

problemRouter.put('/put',editProblemById)


