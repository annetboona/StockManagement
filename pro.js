const express =require('express');
const app = express.Router();
const product = require('../models/product');
router.get('/', async(req,res) =>{
  const products = await product.find();
  if(!product) {
    return res.status(400).json('error in retrieving product:',message.error);
  }
  res.status(200).json('product retrieved successfully:', message.data);
}).catch(error =>{
  res.status(500).json('server running error')
})
router.get('/', async(req,res) =>{
  const {id} = req.params.id;
  const product = await product.findById(id);
  if(!product) {
    return res.status(404).json('product by id not found:',message.error);
  }
  res.status(200).json('product retrieved by id successful:',message)
}).catch(error =>async(req,res) =>{
  console.error(error)
})
router.post('/',async(req,res) =>{
  const {productname,quantity} = req.body;
  const product = await product.create(product);
  if(!productname || !quantity) {
    res.status(400).json('all fields are required');
  }
  res.status(201).json('product created succussfully:',message.data);
}).catch(err =>{
  console.error(err)
});
router.put('/',async(req,res) =>{
  const {id} = req.params.id
  const product = await product.findByIdAndUpdate(id);
  if(!product) {
    return res.status(404).json('product by id not found:',message.error);
  }
  res.status(200).json('product updated  successful:',message)
}).catch(error =>async(req,res) =>{
  console.error(error)
})
router.delete('/',async(req,res) =>{
  const {id} = req.params.id;
  const product = await product.findByIdAndDelete(id);
  if(!product) {
    return res.status(404).json('product by id not found:',message.error);
  }
  res.status(200).json('product deleted  successful:',message)
}).catch(error =>async(req,res) =>{
  console.error(error);
})
