const {AstreCommon} = require("./AstreCommon")

class Planete {

    constructor(obj) {
        // réutilisation du constructeur général de AstreCommon (avec des Throw erreurs si nécessaire)
        Object.assign(this, new AstreCommon(obj))
        this.type = obj.type != null ? obj.type : ''
        this.taille = obj.taille != null ? obj.taille : ''
        this.distanceTerre = obj.distanceTerre != null ? obj.distanceTerre : ''
        this.distanceEtoile = obj.distanceEtoile != null ? obj.distanceEtoile : ''
        this.systemePlanetaire = obj.systemePlanetaire != null ? obj.systemePlanetaire : ''
        this.etoile = obj.etoile != null ? obj.etoile : ''
        this.galaxie = obj.galaxie != null ? obj.galaxie : ''
        this.pesanteur = obj.pesanteur != null ? obj.pesanteur : ''
        this.temperatureMoyenne = obj.temperatureMoyenne != null ? obj.temperatureMoyenne : ''
        this.satellites = obj.satellites != null ? obj.satellites : []
    }

}

module.exports = {
    Planete: Planete
}