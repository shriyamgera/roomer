import jwt from "jsonwebtoken"

const ensureAuthenticated = (req,res,next)=>{
    const auth = req.headers['authorization']
    if(!auth){
        return res.status(403).json({message:"Token not found", success:false})
    }
    try {
        const decode = jwt.verify(auth, 'jwt_secret1234')
        req.user = decode
        next()
    } catch (error) {
        return res.status(403).json({message:"Wrong token or token expired", success:false})
    }
}
export default ensureAuthenticated