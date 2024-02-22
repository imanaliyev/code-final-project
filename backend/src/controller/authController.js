import { userModel } from "../model/userModel.js"
import 'dotenv/config'
import jwt  from "jsonwebtoken"
import bcrypt from 'bcrypt'




export const loginController = async (req, res) => {
    const { username, password } = req.body
    try {
        
        const user = await userModel.findOne({username : username})
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!user) {
           return res.send("user not found")
            
        }
        if (!isPasswordCorrect) {
            return res.send("password is wrong")
            
        }
        const token = jwt.sign({ username:username,role:user.role,id:user._id}, process.env.JWT_KEY, { expiresIn: '5h' });
      
       res.json(token)
    } catch (error) {
        res.status(500).json(error.massage)  
    } 
}

export const registerController = async (req, res) => {
    
    const { username, password,email } = req.body
    const hash = bcrypt.hashSync(password, 12);
    try {
        
      
        const newUser = new userModel({ username, password:hash,email })
        const token = jwt.sign({ username : username,email:email,role:"user"}, process.env.JWT_KEY);
       
        await newUser.save()
        res.json(token)
    } catch (error) {   
        res.status(500).json(error.massage)    
    }
}  


