
import mongoose, { Schema } from "mongoose";

const dislikeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

export const Dislike = mongoose.model("Dislike", dislikeSchema);
