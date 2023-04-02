import { Router } from "express"
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js"
import { userSchema } from "../schemas/userSchema.js"
import userControllers from "../controllers/userControllers.js"

const userRoutes = Router()

userRoutes.post('/signup', validateSchema(userSchema), userControllers.create)

export default userRoutes