import db from "../config/dbConnection.js"

async function findByEmail(email) {
    return await db.query(
        `
            SELECT * FROM users
            WHERE email = $1
        `,
        [email]
    )
}

async function createPatient({email, password, name, user_type}) {
    await db.query(
        `
            INSERT INTO users 
                (email, password, name, user_type)
            VALUES ($1, $2, $3, $4)
        `,
        [email, password, name, user_type]
    )
}

async function createDoctor({email, password, name, user_type, specialty, location}) {
    await db.query(
        `
            INSERT INTO users 
                (email, password, name, user_type, specialty, location)
            VALUES ($1, $2, $3, $4, $5, $6)
        `,
        [email, password, name, user_type, specialty, location]
    )
}


export default {
    findByEmail,
    createPatient,
    createDoctor
}