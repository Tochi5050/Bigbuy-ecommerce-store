import asyncHandler from "../middleware/asyncHandler.js";
import User from "../model/UserSchema.js";
import mongoose from "mongoose";
import { generateToken } from "../middleware/jsonwebtoken.js";



// @desc   Authenticate or Login users
// @routes POST /api/users/authUsers

export const authUsers = asyncHandler(async(req, res) => {
   const {email, password} = req.body

   const user = await User.findOne({
      email
   })

   if(user && (await user.matchedPassword(password))){
      generateToken(res, user._id)
      res.status(200).json({
         name: user.name,
         _id: user._id,
         password: user.password,
         isAdmin: user.isAdmin
      })
   }else{
      res.status(500)
      throw new Error('Invalid email or password')
   }

}) 

// @desc   Register new Users
// @routes POST api/users/registerUsers

export const registerUsers = asyncHandler(async(req, res) => {
   const {name, password, email} = req.body

   const userExists = await User.findOne({
       email
   })

   if(userExists){
      res.status(400);
      throw new Error('User already exists');
   }

   const user = await User.create({
      name,
      email,
      password
   })

   if(user){
      generateToken(res, user._id)

      res.status(200).json({
         name: user.name,
         _id: user._id,
         email: user.email,
         isAdmin: user.isAdmin
      })
   }else{
      res.status(400)
      throw new Error('User cannot be created')
   }

   


})

// @desc Logout User
// @ POST api/users/logoutUsers

export const logoutUsers = (req, res) => {
   res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0)
   })

   res.status(200).json({message: 'User token deleted'})
}