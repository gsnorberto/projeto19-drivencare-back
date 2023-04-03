import joi from 'joi'

export const schedule = joi.object({
    patientId: joi.number().required(),
    doctorId: joi.number().required(),
    date: joi.any().required(),
    time: joi.any().required(),
    observations: joi.any().optional()
})

export default {
    schedule
}