import appointmentRespositories from "../repositories/appointmentRespositories.js"
import userRepositories from "../repositories/userRepositories.js"
import errors from '../errors/index.js'
import moment from 'moment'

moment().format()

async function search(queryString) {
    if(!queryString) throw errors.emptyFields('"search" query cannot be empty')

    const { rows: dataResult } = await appointmentRespositories.search(queryString)

    return dataResult
}

async function getAvailableTime(doctorId) {
    const { rows: dataResult } = await appointmentRespositories.getAvailableTime(doctorId)
    return dataResult
}

async function scheduleAppointment({patientId, doctorId, date, time, observations}) {
    //check if patient exists
    let {rowCount: userExists} = await userRepositories.findPatientById(patientId)
    if(!userExists) throw errors.dataNotFound('patientId not found')

    // Check date and time format
    let dateIsValid = moment(date, 'YYYY-MM-DD',true).isValid()
    let timeIsValid = moment(time, 'hh:mm:ss',true).isValid()
    if(!dateIsValid || !timeIsValid) throw errors.invalidData('Invalid "date" or "time". Correct format is: "YYYY-MM-DD" and "hh:mm:ss"')

    // Timestamp format
    let dateAndTime = `${date} ${time}`

    //check if schedule exists
    let {rowCount: scheduleAvailable} = await appointmentRespositories.checkAvailableTime({doctorId, dateAndTime})
    if(!scheduleAvailable) throw errors.dataNotFound('Schedule not found')

    //save schedule
    await appointmentRespositories.scheduleAppointment({patientId, doctorId, dateAndTime, observations})
}

async function addAvailableTime({doctorId, date, time}){
    // Check date and time format
    let dateIsValid = moment(date, 'YYYY-MM-DD',true).isValid()
    let timeIsValid = moment(time, 'hh:mm:ss',true).isValid()
    if(!dateIsValid || !timeIsValid) throw errors.invalidData('Invalid "date" or "time". Correct format is: "YYYY-MM-DD" and "hh:mm:ss"')
    
    // Check if doctorId exists
    let {rowCount: doctorExists} = await userRepositories.findDoctorById(doctorId)
    if(!doctorExists) throw errors.dataNotFound('DoctorId not found')
    
    // Timestamp format
    let dateAndTime = `${date} ${time}`
    
    // check if the time has already been registered
    let {rowCount: timeExists} = await appointmentRespositories.checkAvailableTime({doctorId, dateAndTime})
    if(timeExists) throw errors.conflictError('Time already registered')
    
    // Save doctor available time
    await appointmentRespositories.addAvailableTime({doctorId, dateAndTime})
}

export default {
    search,
    addAvailableTime,
    getAvailableTime,
    scheduleAppointment
}