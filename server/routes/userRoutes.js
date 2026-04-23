import { Router } from "express";
import * as userController from "../controllers/userController.js";

Router.patch("/", userController.createUser);
