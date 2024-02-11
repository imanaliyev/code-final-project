import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    password: {type:String},
    email:{type:String},    
    role:{type:String, default:"user"}  
  });

 export const userModel = mongoose.model('Users', userSchema);    