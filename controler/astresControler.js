const connection = require('../DB/connectionDB')
const {Planete} = require("../model/Planete");

async function getAll() {
    return await connection.getAllData(connection.astresUrl)
}

async function saveAstre(astreData) {
    let astre
    try {
        astre = new Planete(astreData);
    } catch (err){
        console.log("erreur controleur : " + err)
        return {code: "400", message: err.message}
    }
    return await connection.saveObject(astre, connection.astresUrl)
}

async function getAstreById(astreID) {
    return await connection.getByID(astreID)
}

module.exports = {
    getAllAstres: getAll,
    saveAstre: saveAstre,
    getAstreByID: getAstreById,
}