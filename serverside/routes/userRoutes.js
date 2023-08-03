import express from 'express'
const router = express.Router()
import {authUsers, registerUsers, logoutUsers}  from '../controller/userController.js'



router.post('/authUsers', authUsers)
router.post('/registerUsers', registerUsers)
router.post('/logoutUsers', logoutUsers)


export default router 