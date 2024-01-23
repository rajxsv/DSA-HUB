import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Dislike",
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Post = mongoose.model("Post", postSchema);
