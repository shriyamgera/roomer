import express from 'express'
const router = express.Router()
import User from '../model/user.js'
import ensureAuthenticated from '../middlewares/Auth.js'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()

router.post('/',ensureAuthenticated, async(req, res)=>{
    const {accommodationID} = req.body
    const token = req.headers['authorization']
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    const email = decode.email
    const user = await User.findOne({email})

    const found = user.wishlist.includes(accommodationID)
    if(!found){
        user.wishlist.push(accommodationID)
        res.json({message:"Added to wishlist", wishlist: user.wishlist, success:true })
    }else{
        user.wishlist = user.wishlist.filter(item => item !==accommodationID)
        res.json({message:"Removed from wishlist", wishlist: user.wishlist, success:true })
    }
    user.save()
})

export default router