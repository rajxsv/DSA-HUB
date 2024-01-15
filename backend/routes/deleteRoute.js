import { deleteProblemById } from "../db/db.js";

export default async function deleteRoute(req, res){
    await deleteProblemById(req.params.id)
    .then(()=>{
      res.json({ msg: "Delete Problem done" });
    })
    .catch(()=>{
      res.json({msg : 'invalid del req'})
    })
};
