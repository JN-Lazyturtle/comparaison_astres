const axios = require('axios')

const DBconfig = {
    baseURL: 'https://astres-079d.restdb.io/rest',
    headers: {'x-apikey': 'b69a8b7ca1ca6ab24c74b32cea21d2d32955f'},
}
const astresUrl = '/astres'
const utilisateursUrl = '/utilisateurs'

function saveObject(object, collectionUrl) {
    let config = DBconfig
    config.method = 'post'
    config.url = collectionUrl
    config.data = object
    axios(config)
}

async function getAllData(collectionUrl) {
    let config = DBconfig
    config.method = 'get'
    config.url = collectionUrl
    const response = await axios(config)
    return response.data
}

module.exports = {
    astresUrl: astresUrl,
    utilisateursUrl: utilisateursUrl,
    saveObject: saveObject,
    getAllData: getAllData
}