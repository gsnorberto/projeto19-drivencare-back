import appointmentRespositories from "../repositories/appointmentRespositories.js"
import errors from '../errors/index.js'

async function search(queryString) {
    if(!queryString) throw errors.emptyFields('"search" query cannot be empty')

    const { rows: dataResult } = await appointmentRespositories.search(queryString)

    return dataResult
}

export default {
    search,
}