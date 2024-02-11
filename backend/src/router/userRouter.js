import { Router } from "express"
import { deleteUser, getAllUsers, getByIdUser, postUser, updateUser } from "../controller/userController.js"
import { verifyAccess } from "../middleware/authMiddleware.js"


export const userRouter = Router()

userRouter.get('/',verifyAccess(['admin']),getAllUsers )
userRouter.get('/:id',verifyAccess(['admin','user']),getByIdUser)
userRouter.post('/',verifyAccess(['admin']),postUser)
userRouter.put('/:id',verifyAccess(['admin']),updateUser)
userRouter.delete('/:id',verifyAccess(['admin']),deleteUser )