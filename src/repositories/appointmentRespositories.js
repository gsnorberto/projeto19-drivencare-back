import db from "../config/dbConnection.js"

async function search(queryString) {
    return await db.query(
        `
            SELECT
                name, specialty, location
            FROM users
            WHERE
                user_type = 'doctor' and
                LOWER(name) LIKE LOWER('%${queryString}%') or
                LOWER(specialty) LIKE LOWER('%${queryString}%') or
                LOWER(location) LIKE LOWER('%${queryString}%')
            ORDER BY name;
        `
    )
}

async function addAvailableTime({doctorId, dateAndTime}) {
    await db.query(
        `
            INSERT INTO available_time 
                (doctor_id, date_time)
            VALUES
                ('${doctorId}', '${dateAndTime}');
        `
    )
}

async function checkAvailableTime({doctorId, dateAndTime}) {
    return await db.query(
        `
            SELECT * FROM available_time
            WHERE doctor_id = '${doctorId}' and date_time = '${dateAndTime}'
        `
    )
}

async function getAvailableTime(doctorId) {
    return await db.query(
        `
            SELECT * FROM available_time
            WHERE doctor_id = '${doctorId}'
        `
    )
}

export default {
    search,
    addAvailableTime,
    checkAvailableTime,
    getAvailableTime
}