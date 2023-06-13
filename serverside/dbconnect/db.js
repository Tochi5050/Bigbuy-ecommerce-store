import mongoose from 'mongoose'

const connectDB = async() => {
  try {
    const mongoDB = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database connected on: ${mongoDB.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.msg}`)
    process.exit(1)
  }
}

export default connectDB