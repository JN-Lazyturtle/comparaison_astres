const connection = require('../DB/connectionDB')
const {Astre} = require("../model/Planete");

async function getAll() {
    return await connection.getAllData(connection.astresUrl)
}

async function saveAstre(astre) {
    try {
        astre = new Astre(astre);
    } catch (err){
        console.log("erreur controleur : " + err)
        return {erreur: "erreur"}
    }
    console.log("save : \n" + JSON.stringify(astre))
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