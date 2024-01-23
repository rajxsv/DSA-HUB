import mongoose, { mongo } from "mongoose";

// const problemSchema = new mongoose.Schema({
//   title : {
//     type : String,
//     required : true
//   },
//   description : {
//     type:  String,
//     required: true
//   },
//   tags: [{
//     type:String,
//     required: true
//   }],
//   links: [{
//     type: URL,
//     required: true
//   }],
//   attempted: {
//     type: String,
//     enum: ["DONE","NOT DONE","ATTEMPTED"],
//     default: "NOT DONE"
//   }
// })

const problemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  tags: [
    {
      type: [String, "Please Enter String Value."],
      required: true
    }
  ],
  links: String,
  done: Boolean,
});

export const Problem = mongoose.model('Problem',problemSchema)