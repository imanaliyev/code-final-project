import  jwt  from "jsonwebtoken"
import 'dotenv/config'

export const verifyAccess = function (roles) {
    return function (req, res, next) {
    

        try {
            let token = req.headers.authorization
            console.log(token);
            if (!token) {
              return  res.status(403).send("no access!")
             
                
            }
            if (!token.startsWith('Bearer')) {
               
                return  res.status(403).send("token is not valid!")
            }
            token = token.slice(7)
            const decoded =  jwt.verify(token, process.env.JWT_KEY);
            req.decoded = decoded
            if (!roles.includes(decoded.role)) {
                return res.send("you dont have access")
                
            }
            console.log(decoded)
          
            next()
            
        } catch (error) {
            res.send(error.massage)  
        }
       
    }
}