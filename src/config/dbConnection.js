import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const { Pool } = pg

const dbConfig = { connectionString: process.env.DATABASE_URL }
const db = new Pool(dbConfig);

export default db