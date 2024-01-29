import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: [8, "Password should be atleast 8 words long"],
  },
  problems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Problem",
    },
  ],
});

export const User = mongoose.model("User", userSchema);
