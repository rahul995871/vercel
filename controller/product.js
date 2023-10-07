const mongoose=require('mongoose')
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;
const model=require('../model/product')
const Product=model.Product
exports.createProdcuts = (req, res) => {
const product= new Product(req.body)


product.save()
  res.send(req.body);
};

exports.readProducts = async(req, res) => {
  const products= await Product.find()
  res.send(products);
};

exports.readById = async(req, res) => {
  const id = req.params.id;
  console.log(id)
  const ff= await Product.findById(id)
  res.send(ff);
};
exports.updateproducts = async(req, res) => {
  const id = req.params.id;  
  console.log(id)
  const doc= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);


 
};
exports.replaceProducts = async(req, res) => {

  const id = req.params.id;
  const doc= await Product.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  
};

exports.deleteProducts = async(req, res) => {
  const id = req.params.id;
  const ff = await Product.findOneAndDelete(id);
 
  res.status(201).json(ff
    );
};
