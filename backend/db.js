import mongoose from "mongoose"
import env from 'dotenv'
env.config()

const URI = process.env.MONGO_URI

const connectDB = async ()=>{
    try {
       const res =  await mongoose.connect(URI)
       console.log("DB Connected")
    } catch (error) {
        console.error(error)
    }
} 
export default connectDB