import status from 'http-status'
import appointmentServices from "../services/appointmentServices.js"

async function search(req, res, next) {
    let { search: queryString } = req.query

    try{
        let doctors = await appointmentServices.search(queryString)
        res.status(status.OK).send(doctors)
    } catch(error){
        next(error)
    }
}

export default {
    search
}