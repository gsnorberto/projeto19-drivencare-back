import express, {json, urlencoded} from 'express'
import cors from 'cors'
import routes from "./routes/index.js"
import { handleApplicationErrors } from './middlewares/errorMiddleware.js'

const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(routes)
app.use(handleApplicationErrors)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}...`));