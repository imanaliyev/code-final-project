import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    password: {type:String},
    email:{type:String},
    avatar:{type:String , default:"https://camo.githubusercontent.com/079ab773441b0a8a7ba0daeb317d6fe0c3f4e3d077630fd2fda927db6bf4b09b/68747470733a2f2f612e736c61636b2d656467652e636f6d2f64663130642f696d672f617661746172732f6176615f303032322d3531322e706e67"}    ,
    role:{type:String, default:"user"},
    basket:[{ type: Schema.Types.ObjectId, ref: 'products' }]
  });

 export const userModel = mongoose.model('Users', userSchema);    