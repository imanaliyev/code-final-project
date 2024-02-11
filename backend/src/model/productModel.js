import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image:String,
    category:String,
    name:String,
    price:Number,
 
  });
 export  const productModel = mongoose.model('products', productSchema);