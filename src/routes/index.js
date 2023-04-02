import { Router } from "express"
import userRoutes from "./userRoutes.js"
import appointmentRoutes from "./appointmentRoutes.js"

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/appointment", appointmentRoutes)

export default routes