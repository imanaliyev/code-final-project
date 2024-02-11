import { Router } from "express"
import { deleteProduct, getAllProducts, getByIdProduct, postProduct, updateProduct } from "../controller/productController.js"
import { verifyAccess } from "../middleware/authMiddleware.js"

export const productRouter = Router()

productRouter.get('/', getAllProducts)
productRouter.get('/:id',getByIdProduct)
productRouter.post('/',verifyAccess(['user','admin']),postProduct)
productRouter.put('/:id',verifyAccess(['user','admin']),updateProduct)
productRouter.delete('/:id',verifyAccess(['user','admin']), deleteProduct)