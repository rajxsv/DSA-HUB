import express from "express";
import cors from "cors";

import dataRoute from "./routes/dataRoute.js";
import problemData from "./routes/problemData.js";
import addRoute from "./routes/addRoute.js";
import deleteRoute from './routes/deleteRoute.js'
import editRoute from "./routes/editRoute.js";
import connect from "./db/db.js"


const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
await connect()

app.get("/", dataRoute);
app.get("/:id", problemData);
app.post("/post",addRoute)
app.delete('/delete/:id',deleteRoute)
app.put('/put',editRoute)

app.listen(port, () => {
  console.log("listening on ", port);
});
