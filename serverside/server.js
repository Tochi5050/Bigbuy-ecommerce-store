import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../serverside/dbconnect/db.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorHandler.js'
dotenv.config()

const port = 5000

connectDB() 

const app = express() 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.get('/', (req, res) => {
    res.send('running...')
})



app.listen(port)