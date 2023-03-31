const axios = require('axios')

const DBconfig = {
    baseURL: 'https://astres-079d.restdb.io/rest',
    headers: {'x-apikey': 'b69a8b7ca1ca6ab24c74b32cea21d2d32955f'},
}
const astresUrl = '/astres'
const utilisateursUrl = '/utilisateurs'

async function saveObject(object, collectionUrl) {
    let config = DBconfig
    config.method = 'post'
    config.url = collectionUrl
    config.data = object
    try {
        const response = await axios(config)
        console.log("save : \n" + JSON.stringify(object))
        return {
            code: response.status,
            message: response.statusText
        }
    } catch (e) {
        return {
            code: e.response.status,
            message: e.response.statusText
        }
    }
}
async function updateObject(object, objectId, collectionUrl) {
    let config = DBconfig
    config.method = 'put'
    config.url = collectionUrl + "/"+ objectId
    config.data = object
    try {
        const response = await axios(config)
        console.log("updated : \n" + JSON.stringify(object))
        return {
            code: response.status,
            message: response.statusText
        }
    } catch (e) {
        return {
            code: e.response.status,
            message: e.response.statusText
        }
    }

}

async function getAllData(collectionUrl) {
    let config = DBconfig
    config.method = 'get'
    config.url = collectionUrl
    try {
        const response = await axios(config)
        return response.data
    } catch (e) {
        return {
            code: e.response.status,
            message: e.response.statusText
        }
    }
}

async function getByID(astreID) {
    let config = DBconfig
    config.method = 'get'
    config.url = astresUrl + '/' + astreID
    try {
        const response = await axios(config)
        return response.data
    } catch (e) {
        return {
            code: e.response.status,
            message: e.response.statusText
        }
    }
}

async function getByField(field, regexName) {
    let config = DBconfig
    config.method = 'get'
    config.url = astresUrl+'?q={"'+field+'" : {"$regex" : "'+regexName+'"}}'
    try {
        const response = await axios(config)
        console.log("https://astres-079d.restdb.io/rest"+astresUrl+'?q={"'+field+'" : {"$regex" : "'+regexName+'"}}')
        return response.data
    } catch (e) {
        return {
            code: e.response.status,
            message: e.response.statusText
        }
    }
}

async function getUtilisateur(login) {
    let config = DBconfig
    config.method = 'get'
    config.url = utilisateursUrl+'?q={"login": "'+login+'"}'
    try {
        const response = await axios(config)
        return response.data
    } catch (e) {
        return {
            code: e.response.status,
            message: e.response.statusText
        }
    }
}

module.exports = {
    astresUrl: astresUrl,
    utilisateursUrl: utilisateursUrl,
    saveObject: saveObject,
    updateObject: updateObject,
    getAllData: getAllData,
    getByID: getByID,
    getByField: getByField,
    getUtilisateur: getUtilisateur,

}