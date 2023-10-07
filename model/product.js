const mongoose = require('mongoose');

const { Schema } = mongoose;
// ----schema--
const productSchema = new Schema({

    title:String,
    description:String,
    price:Number,
    discountPercentage:Number,
    rating:Number,
    stock:String,
    brand:String,
    category:String,
    thumbnail:String

   
   
   });
exports.Product = mongoose.model('Product', productSchema);