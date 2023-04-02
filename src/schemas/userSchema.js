import joi from 'joi'

export const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    name: joi.string().required(),
    user_type: joi.string().valid('doctor', 'patient'),
    specialty: joi.any().optional(),
    location: joi.any().optional()
})