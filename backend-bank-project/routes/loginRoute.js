import {Router} from "express";
import { loginController } from "../controller/loginController.js";
export const router = Router();
router.post("api/login",loginController);