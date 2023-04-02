function conflictError(message){
    return {
        name: "ConflictError",
        message
    }
}

function emptyFields(message){
    return {
        name: "EmptyFields",
        message
    }
}

function invalidData(message){
    return {
        name: "InvalidData",
        message
    }
}

function dataNotFound(message){
    return {
        name: "DataNotFound",
        message
    }
}

export default {
    conflictError,
    emptyFields,
    invalidData,
    dataNotFound
}