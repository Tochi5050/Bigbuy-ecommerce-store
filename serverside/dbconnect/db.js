import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://Tochi:Tochi5050@cluster0.fajbs6w.mongodb.net/'

const connectDB = async() => {
  try {
    const mongoDB = await mongoose.connect(MONGO_URI)
    console.log(`Database connected on: ${mongoDB.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.msg}`)
    process.exit(1)
  }
}

export default connectDB