import User from "../model/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()

const login = async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(403).json({message:"Auth failed", success:false})
        }
        const isPassEqual = await bcrypt.compare(password, user.password)
        if(!isPassEqual){
            return res.status(403).json({message:"Auth failed", success:false})
        }
        const jwtToken = jwt.sign(
            {email: user.email, _id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )
        res.status(200).json({message:'Login Successfull', success:true, token:jwtToken, name:user.name, wishlist:user.wishlist})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", success:false})
    }
}

export default login