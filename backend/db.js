import mongoose from "mongoose"

const URI = 'mongodb://127.0.0.1:27017/roomer'

const connectDB = async ()=>{
    try {
       const res =  await mongoose.connect(URI)
       console.log("DB Connected")
    } catch (error) {
        console.error(error)
    }
} 
export default connectDB