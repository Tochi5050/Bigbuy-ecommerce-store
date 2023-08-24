import asyncHandler from '../middleware/asyncHandler'
import jwt from 'jsonwebtoken'
import User from '../model/UserSchema'


export const auth = asyncHandler(async(req, res, next) => {
let token;

token = req.cookies.jwt

if(token){
    try{
    const decoded = jwt.verify(token, 'foo')
    
    req.user = await User.findById(decoded.userId).select('-password')

    next()
    }catch(err){
        res.status(404)
        throw new Error('Unauthorized, token generation failed')
    }
}else{
    res.status(404)
    throw new Error('Unable to authenticate, token not found')
}
})

export const adminAuth = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next()
    }else{
        res.status(404)
        throw new Error('Unauthorized access')
    }
}