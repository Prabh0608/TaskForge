import mongoose from "mongoose";
import { app } from "./app.js";
import * as dotenv from "dotenv";
dotenv.config({ path: "./server/config.env" });

mongoose
  .connect(
    `mongodb+srv://admin_TaskForge:${process.env.MONGO_PASS}@taskforge.zlgz4m0.mongodb.net/`,
  )
  .then(() => {
    console.log("Connected to data base!");
  })
  .catch((err) => {
    console.log("Error while connecting to DB!", err);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Process is running on port ${port}!`);
});
