import appointmentRespositories from "../repositories/appointmentRespositories.js"
import errors from '../errors/index.js'

async function search(queryString) {
    if(!queryString) throw errors.emptyFields('"search" query cannot be empty')

    const { rows: dataResult } = await appointmentRespositories.search(queryString)

    let data = dataResult.map(row => ({
        name: row.name, specialty: row.specialty, location: row.location
    }))

    return data
}

export default {
    search,
}