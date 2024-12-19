import { Router } from "express"
import ensureAuthenticated from "../middlewares/Auth.js"
import fetchWishlist from "../middlewares/Wishlist.js"

const router = Router()

router.get('/', ensureAuthenticated, fetchWishlist, ( req, res) => {
    res.status(200).json({success:true, wishlist:req.wishlist})
})

export default router
