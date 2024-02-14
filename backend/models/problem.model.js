import mongoose, { Mongoose, mongo } from "mongoose";

const problemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  links: [
    {
      type: String,
      required: true,
    },
  ],
  done: Boolean,
});

export const Problem = mongoose.model("Problem", problemSchema);
