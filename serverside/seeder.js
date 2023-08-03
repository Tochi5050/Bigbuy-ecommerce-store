import mongoose from 'mongoose'
import connectDB from './dbconnect/db.js'
import Product from './model/ProductSchema.js'
import User from './model/UserSchema.js'
import asyncHandler from './middleware/asyncHandler.js'
import { products } from './Products/productData.js'

connectDB()


export const seedData = async() => {
    try{

    await Product.deleteMany()

    const users = await User.find({})
    
    const user = users[0]._id
    
    let newProducts;
    
    if(!user){
        throw new Error('Unable to retrieve a user')
    }

    if(user){
        newProducts = products.map(prod => {
            return {...prod, user: user}
        })
    }
        


       await Product.insertMany(newProducts)

        console.log('Products added')
    

}catch(err){
    console.log('Product was not added', err)
}
}

export const deleteData = async() => {
    try{
    await Product.deleteMany()

    console.log('Product Deleted')
    }catch(err){
        console.log('Unable to delete Product', err.error)
    }
}

if(process.argv[2] === '-d'){
    deleteData()
}else{
    seedData()
}