import express from "express";
import * as userRouter from "./routes/userRoutes.js";

export const app = express();

app.use("/api/v1/user", userRouter);
