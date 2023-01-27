const connection = require('../connectionDB')

async function getAll() {
    return await connection.getAllData(connection.astresUrl)
}

module.exports = {
    getAllAstres: getAll()
}