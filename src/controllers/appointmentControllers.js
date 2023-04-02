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

async function addAvailableTime(req, res, next) {
    let { doctorId } = req.params
    let { date, time } = req.body

    try{
        await appointmentServices.addAvailableTime({doctorId, date, time})
        return res.sendStatus(status.CREATED)
    } catch(error){
        next(error)
    }
}

async function getAvailableTime(req, res, next) {
    let { doctorId } = req.params

    try{
        let doctorSchedule = await appointmentServices.getAvailableTime(doctorId)
        return res.status(200).send(doctorSchedule)
    } catch(error){
        next(error)
    }
}

export default {
    search,
    addAvailableTime,
    getAvailableTime
}