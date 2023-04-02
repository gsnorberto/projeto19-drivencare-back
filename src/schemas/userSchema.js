import joi from 'joi'

export const user = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    name: joi.string().required(),
    user_type: joi.string().valid('doctor', 'patient'),
    specialty: joi.any().optional(),
    location: joi.any().optional()
})

export default {
    user
}