class Astre {

    //Un astre doit être crée avec au minimum un nom, une catégorie et un auteur
    constructor(obj) {
        if( !obj || Object.keys(obj).length === 0 ){
            throw new Error("data was expected")
        }
        this._id = obj._id
        this.nom = obj.nom
        this.categorie = obj.categorie
        this.auteur = obj.auteur

        if (!this.nom || !this.categorie || !this.auteur){
            throw new Error("Any astre need at least a name, a category and an author")
        }

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
        this.image = obj.image != null ? obj.image : ''
    }

}

module.exports = {
    Astre: Astre
}