import { Router } from "express"
import { loginController, registerController } from "../controller/authController.js"



export const authRouter = Router()

authRouter.post('/login',loginController)
.post('/register',registerController)
