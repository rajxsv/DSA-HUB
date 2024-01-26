import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import { userRouter } from "./routes/user.routes.js";
import { publicRouter } from "./routes/public.routes.js";
import connect from "./db/db.js";

const app = express();
const port = process.env.PORT | 3000;

await connect();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/", userRouter);
app.use("/", publicRouter);

app.listen(port, () => {
  console.log("listening on ", port);
});
