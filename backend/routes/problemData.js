import {getProblemByID} from '../db/db.js'

export default async function problemDataRoute(req, res){
  try {
    const id = req.params.id
    const problems = await getProblemByID(id)
    res.json({problems})

  } catch (error) {
    res.json({msg:'Routing issue'})
  }
}