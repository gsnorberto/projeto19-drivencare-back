import { Router } from "express"
import appointmentControllers from "../controllers/appointmentControllers.js"

const appointmentRoutes = Router()

appointmentRoutes.get('/doctors', appointmentControllers.search)

export default appointmentRoutes