const {Astre} = require("../model/Astre")

function getFixtures() {
    return [
        getTerre(),
        getSaturne(),
        getLeviathe(),
        getMars()
    ]
}

function getSaturne() {
    let data = {
        "nom": "Saturne",
        "categorie": "planete",
        "auteur": "rouxy",
        "type": "gazeuse",
        "taille": 58232,
        "distanceTerre": 8.6,
        "distanceEtoile": 9.5,
        "systemePlanetaire": "system solaire",
        "etoile": "soleil",
        "galaxie": "voie lactée",
        "pesanteur": 10.44,
        "temperatureMoyenne": -150,
        "satellites": {
            "1": "Titan",
            "2": "Japet",
            "3": "Rhéa",
            "4": "Thétis",
            "5": "Pandore"
        },
        "image": "https://starwalk.space/gallery/images/saturn-planet-guide/1140x641.jpg"
    }
    return new Astre(data)
}

function getTerre() {
    let data = {
        "nom": "Terre",
        "categorie": "planete",
        "auteur": "julie",
        "type": "tellurique",
        "taille": 6371,
        "distanceTerre": 0,
        "distanceEtoile": 1,
        "systemePlanetaire": "system solaire",
        "etoile": "soleil",
        "galaxie": "voie lactée",
        "pesanteur": 9.80,
        "temperatureMoyenne": 13.7,
        "satellites": {
            "1": "Lune"
        },
        "image": "https://www.airzen.fr/wp-content/uploads/2022/05/AdobeStock_386153207-scaled-e1653919712548.jpeg"
    }
    return new Astre(data)
}

function getLeviathe() {
    let data =
        {
            "nom": "Leviathe",
            "categorie": "planete",
            "auteur": "julie",
            "type": "océanique",
            "taille": 2000,
            "distanceTerre": 3000,
            "distanceEtoile": 3001,
            "systemePlanetaire": "outer wilds",
            "etoile": "soleil",
            "galaxie": "galaxie outer wilds",
            "pesanteur": 12.00,
            "temperatureMoyenne": 10,
            "satellites": {
                "1": "Lance-sondes orbital"
            },
            "image":"https://vainkeurz.com/wp-content/uploads/2021/12/leviathe.jpg"
        }
    return new Astre(data)
}

function getSombronce() {
    let data = {
        "nom": "Sombronce",
        "categorie": "planete",
        "auteur": "julie",
        "type": "infini",
        "taille": 1000,
        "distanceTerre": 3000,
        "distanceEtoile": 3001,
        "systemePlanetaire": "outer wilds",
        "etoile": "soleil",
        "galaxie": "galaxie outer wilds",
        "pesanteur": 0,
        "temperatureMoyenne": -100,
        "satellites": {},
        "image": "https://static.wikia.nocookie.net/outer-wilds/images/8/83/Dark_Bramble.png/revision/latest?cb=20211122185621&path-prefix=fr"
    }
    return new Astre(data)
}

module.exports = {
    getFixtures: getFixtures
}
