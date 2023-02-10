class AstreCommon{

    //Un astre doit être crée avec au minimum un nom, une catégorie et un auteur
    constructor(obj) {
        if( !obj || Object.keys(obj).length === 0 ){
            throw new Error("data was expected")
        }
        this._id = obj.id
        this.nom = obj.nom
        this.categorie = obj.categorie
        this.auteur = obj.auteur

        if (!this.nom || !this.categorie || !this.auteur){
            throw new Error("Any astre need at least a name, a category and an author")
        }
    }

}

module.exports = {
    AstreCommon: AstreCommon
}