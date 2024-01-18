import express from "express";
import cors from "cors";
import { router } from "./routes/user-problems-routes.js";
import "dotenv/config";
import cookieParser from "cookie-parser";

import connect from "./db/db.js";

const app = express();
const port = process.env.PORT | 3000;

await connect();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log("listening on ", port);
});
