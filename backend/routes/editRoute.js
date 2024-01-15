import express from "express";
import { editProblem } from "../db/db.js";
export default async function editRoute(req, res) {
  
  const id = req.body.id;
  const problemWithoutId = req.body.problemWithoutId;

  await editProblem(id, problemWithoutId)
    .then(() => {
      res.json({ msg: "Edit Problem Done" });
    })
    .catch(() => res.json({ msg: "Cannot Edit" }));
}
