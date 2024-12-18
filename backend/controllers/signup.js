import bcrypt from 'bcrypt'
import User from '../model/user.js'

const signup = async(req, res)=>{

    try {
        const {name, email, password} = req.body
        console.log(name,email,password)
        
        const user = await User.findOne({email})
        
        if(user){
            return res.status(409).json({message: "User already exists.", success:false})
        }
        const userModel = new User({name, email, password})

        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save()
        res.status(200).json({message: "User Created", success:true})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error", error, success:false})
    }
    
}
export default signup