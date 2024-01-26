import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import 'dotenv/config'

const auth = async(req,res,next) => {
  try {
      const cookie = req.headers.cookie
      const userId = cookie.split('=')[0] 
      const token = cookie.split('=')[1]

      const isValid = jwt.verify(token,process.env.SECRET_KEY)  

      if(isValid){
        req.user = await User.findById(String(userId))
        console.log('User Verified')
        next()
      } else {
        res.status(401).json({message : "Forbidden"})
      }
    } catch (error) {
      console.log(error)
      res.status(404).json({message : "Server error"})
  }
}

export { auth }