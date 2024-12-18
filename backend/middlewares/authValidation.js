import Joi from "joi"

export const signupValidation = async (req, res, next)=>{

    const schema = Joi.object({
        name: Joi.string().min(3).max(40).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(400).required()
    })
  
    const {error} = schema.validate(req.body)
    
    if (error) {
        return res.status(400).json({message:"Bad Request", error})
    }
    next()
}

export const loginValidation = async (req, res, next)=>{

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(400).required()
    })

    const {error} = schema.validate(req.body)
    if (error) {
        return res.status(400).json({message:"Bad Request", error})
    }
    next()
}