import { Router } from "express";
import { registrUser } from "../controllers/user.controllers.js";
const router = Router()
router.route("/register").post(registrUser)
export default router