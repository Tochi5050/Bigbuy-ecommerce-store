import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../serverside/dbconnect/db.js'
dotenv.config()

const port = process.env.PORT

connectDB() 

const app = express()



app.get('/', (req, res) => {
    res.send('running...')
})



app.listen(port)