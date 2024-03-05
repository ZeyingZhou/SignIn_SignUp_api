import { Router } from "express";
import UserController from "../controller/UserController";
import { verifytoken } from "../middleware/jwt";

const userRoute = Router();

userRoute.get("/info", verifytoken, UserController.queryUserInfo);
export default userRoute;