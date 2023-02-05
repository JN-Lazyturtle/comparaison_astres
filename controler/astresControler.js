const connection = require('../DB/connectionDB')

async function getAll() {
    return await connection.getAllData(connection.astresUrl)
}

async function getAstreById(astreID) {
    return await connection.getByID(astreID)
}

module.exports = {
    getAllAstres: getAll(),
    getAstreByID: getAstreById,
}