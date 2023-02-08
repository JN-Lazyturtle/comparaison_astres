const connexion = require('../DB/connexionDB')
const {Planete} = require("../model/Planete");

async function getAll() {
    return await connexion.getAllData(connexion.astresUrl)
}

async function saveAstre(astreData) {
    let astre
    try {
        astre = new Planete(astreData);
    } catch (err){
        console.log("erreur controleur : " + err)
        return {code: "400", message: err.message}
    }
    return await connexion.saveObject(astre, connexion.astresUrl)
}

async function getAstreById(astreID) {
    return await connexion.getByID(astreID)
}

module.exports = {
    getAllAstres: getAll,
    saveAstre: saveAstre,
    getAstreByID: getAstreById,
}