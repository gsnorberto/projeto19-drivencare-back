import userRepositories from '../repositories/userRepositories.js'
import errors from '../errors/index.js'
import bcrypt from 'bcrypt'

async function create({ email, password, user_type, name, specialty, location }){
    const { rowCount } = await  userRepositories.findByEmail(email)
    
    if(rowCount) throw errors.conflictError('This email address is already in use!')
    
    if(user_type === 'doctor'){
        if(!specialty || !location) throw errors.emptyFields('The "specialty" and "location" fields cannot be empty')
    }
    
    const hashPassword = await bcrypt.hash(password, 10)
    
    if(user_type === 'doctor'){
        await userRepositories.createDoctor({email, password: hashPassword, name, user_type, specialty, location})
    } else {
        await userRepositories.createPatient({email, password: hashPassword, name, user_type})
    }
}


export default {
    create
}