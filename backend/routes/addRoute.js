import { addNewProblem } from "../db/db.js";

export default async function addRoute(req, res) {
  // console.log(req.body.newProblem)
  const newProblem = req.body.newProblem
  await addNewProblem(newProblem)
    .then(() => {
      res.json({ msg: "Problem added" });
    })
    .catch((err) => {
      console.error(err);
    });  
}
