import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

//router Object
const userRouter = express.Router();

//routes
//LOGIN -> POST
userRouter.post("/login", loginController);

//REGISTER -> POST
userRouter.post("/register", registerController);

export default userRouter;
