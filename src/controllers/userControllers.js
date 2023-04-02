import status from 'http-status'
import userServices from '../services/userServices.js'

async function create(req, res, next) {
    const data = req.body
    
    try{
        await userServices.create(data)
        return res.sendStatus(status.CREATED)
    } catch(error){
        next(error)
    }
}

export default {
    create
}