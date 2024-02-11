import express, { json } from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cors from 'cors'
import { productRouter } from './src/router/productRouter.js'
import { userRouter } from './src/router/userRouter.js'
import { authRouter } from './src/router/authRouter.js'
import { verifyAccess } from './src/middleware/authMiddleware.js'
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(cors())
  
app.use("/products/",productRouter)  
app.use("/user/",userRouter)  
app.use("/",authRouter)






  mongoose.connect(process.env.SECRET_KEY).then(()=>(console.log("Connnected")))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})