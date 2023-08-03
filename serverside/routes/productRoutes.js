import express from 'express'

const router = express.Router()

import { getProducts } from '../controller/productController.js'



router.get('/', getProducts)

export default router