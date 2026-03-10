import { Router } from "express";
import { registerController } from "../controller/registerController.js";
export const router = Router();
router.post("api/register",registerController);