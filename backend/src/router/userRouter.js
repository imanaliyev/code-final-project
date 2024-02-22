import { Router } from "express"
import { deleteUser, getAllUsers, getByIdUser, postUser, updateUser } from "../controller/userController.js"
import { verifyAccess } from "../middleware/authMiddleware.js"

import { addBasket, showBasket } from "../controller/basketController.js"

export const userRouter = Router()

userRouter.get('/',verifyAccess(['admin']),getAllUsers )
userRouter.get('/:id',verifyAccess(['admin','user']),getByIdUser)
userRouter.post('/',verifyAccess(['admin']),postUser)
userRouter.put('/update/:id',verifyAccess(['admin','user']),updateUser)
userRouter.delete('/:id',verifyAccess(['admin']),deleteUser )
userRouter.put('/addBasket',verifyAccess(['admin','user']),addBasket)
userRouter.put('/showBasket',verifyAccess(['admin','user']),showBasket) 