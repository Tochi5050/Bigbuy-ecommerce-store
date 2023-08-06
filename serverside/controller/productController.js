import mongoose from 'mongoose'
import Product from '../model/ProductSchema.js'
import asyncHandler from '../middleware/asyncHandler.js'


export const getProducts = asyncHandler(async(req, res) => {
  

  

  const product = await Product.find({})

  if(!product){ 
    throw new Error('Product not found')
  }

  res.json({product})
  
}) 