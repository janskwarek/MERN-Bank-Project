import { Router } from "express";
import { registerController } from "../controller/registerController.js";
export const RegisterRouter = Router();
RegisterRouter.post("/AccountApplicationForm",registerController);