import mongoose from 'mongoose'
import Product from '../model/ProductSchema.js'
import asyncHandler from '../middleware/asyncHandler.js'


export const getProducts = asyncHandler(async(req, res) => {
  

  const keyword = req.query.keyword
  ? {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
  : {};

  const product = await Product.find({...keyword})

  if(!product){ 
    throw new Error('Product not found')
  }

  res.json({product})
 
}) 