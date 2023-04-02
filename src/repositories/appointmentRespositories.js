import db from "../config/dbConnection.js"

async function search(queryString) {
    return await db.query(
        `
            SELECT * FROM users
            WHERE
                user_type = 'doctor' and
                LOWER(name) LIKE LOWER('%${queryString}%') or
                LOWER(specialty) LIKE LOWER('%${queryString}%') or
                LOWER(location) LIKE LOWER('%${queryString}%')
            ORDER BY name;
        `,
    )
}

export default {
    search
}