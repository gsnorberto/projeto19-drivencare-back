import { Router } from "express"
import appointmentControllers from "../controllers/appointmentControllers.js"
// import { validateSchema } from "../middlewares/schemaValidationMiddleware.js"
// import appointmentSchemas from "../schemas/appointmentSchemas.js"

const appointmentRoutes = Router()

appointmentRoutes.get('/doctors', appointmentControllers.search)
appointmentRoutes.post(
    '/doctors/schedule/:doctorId',
    appointmentControllers.addAvailableTime
)
appointmentRoutes.get('/doctors/schedule/:doctorId', appointmentControllers.search)

export default appointmentRoutes