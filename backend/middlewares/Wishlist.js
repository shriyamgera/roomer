import User from "../model/user.js"

const fetchWishlist = async (req, res, next) => {
  try {
    const _id = req.user._id
    const user = await User.findOne({ _id })
    
    if (user) {
        req.wishlist = user.wishlist
    } else {
      req.wishlist = []
    }
    next()
  } catch (error) {
    next(error)
  }
}

export default fetchWishlist
