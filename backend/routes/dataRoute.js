import {getData} from '../db/db.js'

export default async function dataRoute(req, res){
  try {
    const problems = await getData()
    res.json({problems})

  } catch (error) {
    res.json({msg:'Routing issue'})
  }
}