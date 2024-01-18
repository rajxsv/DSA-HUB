import express from "express";
import { addNewProblem, deleteProblemById, editProblemById, getAllProblems, getProblemByID, loginUser, registerUser } from "../controllers/user-problem.js";

export const router = express.Router()

router.get('/',getAllProblems)
router.get('/:id',getProblemByID)

router.post('/post',addNewProblem)
router.post('/login',loginUser)
router.post('/register',registerUser)

router.delete("/delete/:id",deleteProblemById)

router.put('/put',editProblemById)


