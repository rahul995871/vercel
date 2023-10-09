const cors=require('cors')
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

const path=require('path')
const mongoose = require('mongoose');
require('dotenv').config()
const express = require("express");
const server = express();
server.use(cors(corsOptions))
server.use(express.json());
// path.join('dist','html')
server.use(express.static('public'))
// server.use(path.resolve(__dirname,'dist','index.html'))

const productsRouter=require('./routes/product')
const productsController = require("./controller/product");
console.log(process.env.PORT)
// server.use('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'dist','index.html'))
// })


server.use('/products',productsRouter.router)

// ---db--
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://rahul995871:JPMvUGDuFAYgHzVq@cluster0.kyzxbuo.mongodb.net/');
  // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

  console.log("connection succesfull....")
}




server.listen(process.env.PORT, (req, res) => {
  console.log("Server is runing..");
});

