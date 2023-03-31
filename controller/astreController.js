const connexion = require('../BD/connexionBD')
const {Astre} = require("../model/Astre")
const fixtures = require("./fixtures")
const utilisateurController = require("./utilisateurController")

async function getAll() {
    return await connexion.getAllData(connexion.astresUrl)
}

async function saveAstre(astreData, token) {
    let astre
    try {
        astre = new Astre(astreData)
    } catch (err){
        console.log("erreur controleur : " + err)
        return {code: "400", message: err.message}
    }
    let loginUser = await utilisateurController.extractLoginFromToken(token)
    astre.auteur = loginUser
    return await connexion.saveObject(astre, connexion.astresUrl)
}

async function updateAstre(astreData, token) {
    let astre
    try {
        astre = new Astre(astreData)
    } catch (err){
        console.log("erreur controleur : " + err)
        return {code: "400", message: err.message}
    }
    if ( !astre._id ){
        console.log("erreur controleur : astre object need an _id field to be updated")
        return {code: "400", message: "astre object need an _id field to be updated"}
    }

    let astreToUpdate = await this.getAstreByID(astre._id)
    if ( !astreToUpdate || astreToUpdate === {} ){
        console.log("erreur controleur : given id doesn't match to any existing astre")
        return {code: "404", message: "given id doesn't match to any existing astre"}
    }

    let loginUser = await utilisateurController.extractLoginFromToken(token)
    if ( ! astreToUpdate.auteur || astreToUpdate.auteur !== loginUser){
        console.log("erreur controleur : you need to be the author of an astre to update it")
        return {code: "404", message: "you need to be the author of an astre to update it"}
    }
    return await connexion.updateObject(astre, astre._id, connexion.astresUrl)
}

async function getAstreById(astreID) {
    return await connexion.getByID(astreID)
}

async function getAstreByField(field, regexName) {
    return await connexion.getByField(field, regexName)
}

async function loadFixtures() {
    let astres = fixtures.getFixtures()
    return await connexion.saveObject(astres, connexion.astresUrl)
}

module.exports = {
    getAllAstres: getAll,
    saveAstre: saveAstre,
    getAstreByID: getAstreById,
    getAstreByField: getAstreByField,
    loadFixtures: loadFixtures,
    update: updateAstre
}