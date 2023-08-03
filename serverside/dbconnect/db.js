import mongoose from 'mongoose'

<<<<<<< HEAD
const connectDB = async() => {
  try {
    const mongoDB = await mongoose.connect(process.env.MONGO_URI)
=======
const MONGO_URI = 'mongodb+srv://Tochi:Tochi5050@cluster0.fajbs6w.mongodb.net/'

const connectDB = async() => {
  try {
    const mongoDB = await mongoose.connect(MONGO_URI)
>>>>>>> master
    console.log(`Database connected on: ${mongoDB.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.msg}`)
    process.exit(1)
  }
}

export default connectDB