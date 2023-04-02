import { Router } from "express"
import { validateSchema } from "../middlewares/schemaValidationMiddleware.js"
import userSchemas from "../schemas/userSchema.js"
import userControllers from "../controllers/userControllers.js"

const userRoutes = Router()

userRoutes.post('/signup', validateSchema(userSchemas.user), userControllers.create)

export default userRoutes