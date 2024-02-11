import { userModel } from "../model/userModel.js"
import 'dotenv/config'
import jwt  from "jsonwebtoken"





export const loginController = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await userModel.findOne({username : username})
        if (!user) {
           return res.send("user not found")
            
        }
        if (user.password !== password) {
            return res.send("password is wrong")
            
        }
        const token = jwt.sign({ username:username,role:user.role}, process.env.JWT_KEY, { expiresIn: '1h' });
      
       res.send(token)
    } catch (error) {
        res.status(500).json(error.massage)  
    } 
}

export const registerController = async (req, res) => {
    try {
        
        const { username, password,email } = req.body
        const newUser = new userModel(req.body)
        const token = jwt.sign({ username : username,role:"user"}, process.env.JWT_KEY);
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {   
        res.status(500).json(error.massage)
    }
}


