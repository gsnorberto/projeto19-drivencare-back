import httpStatus from "http-status"

export function handleApplicationErrors(err, req, res, next) {
    if(err.name === 'ConflictError') {
        return res.status(httpStatus.CONFLICT).send({ message: err.message })
    }

    if(err.name === 'DataNotFound') {
        return res.status(httpStatus.NOT_FOUND).send({ message: err.message })
    }

    if(err.name === 'EmptyFields' || err.name === 'InvalidData') {
        return res.status(httpStatus.BAD_REQUEST).send({ message: err.message })
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: 'Internal Server Error' })
}