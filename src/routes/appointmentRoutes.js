import { Router } from "express"
import appointmentControllers from "../controllers/appointmentControllers.js"
// import { validateSchema } from "../middlewares/schemaValidationMiddleware.js"
// import appointmentSchemas from "../schemas/appointmentSchemas.js"

const appointmentRoutes = Router()

appointmentRoutes.get('/doctors', appointmentControllers.search)
appointmentRoutes.post(
    '/doctors/:doctorId/schedule',
    appointmentControllers.addAvailableTime
)
appointmentRoutes.get('/doctors/:doctorId/schedule', appointmentControllers.getAvailableTime)

export default appointmentRoutes