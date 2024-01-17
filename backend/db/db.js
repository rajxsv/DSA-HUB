import mongoose from "mongoose";
import "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function connect() {
  await mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error("Connection Unsuccessful", err));
}
