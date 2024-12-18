import { Router } from "express"
import ensureAuthenticated from "../middlewares/Auth.js"

const router = Router()

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json({success:true})
})

export default router
