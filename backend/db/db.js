import mongoose from "mongoose";
import 'dotenv/config'

const mongoDB =  process.env.MONGODB_URI;

export default async function connect() {
    await mongoose
      .connect(mongoDB)
      .then(() => console.log("Connected to database"))
      .catch((err) => console.error(err))
}