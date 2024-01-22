import { Schema } from "mongoose"

const postSchema = new Schema({
  title : {
    type : String,
    require:true
  },
  body : {
    type : String,
    require:true
  },
  likes : {
    type : Number,
    require : true
  },
  dislikes : {
    
  }
})

