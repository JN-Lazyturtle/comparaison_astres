class Astre{
    constructor(obj) {
        obj = obj != null ? obj : {}
        this.id = obj.id != null ? obj.id : ''
        this.nom = obj.nom != null ? obj.nom : ''
        this.categorie = obj.categorie != null ? obj.categorie : ''
        this.auteur = obj.auteur != null ? obj.auteur : ''
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
    Astre: Astre
}