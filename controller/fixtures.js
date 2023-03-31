const {Astre} = require("../model/Astre")
const {get} = require("axios");

function getAstresFixtures() {
    return [
        getTerre(),
        getSaturne(),
        getLeviathe(),
        getMars(),
        getTitan(),
        getSoleil(),
        getPluton(),
        getSombronce(),
    ]
}

function getUserFixture(){
    return {
        login: "juvan",
        mdp: "juvan"
    }
}

function getSaturne() {
    let data = {
        "nom": "Saturne",
        "categorie": "planete",
        "auteur": "juvan",
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
        "auteur": "juvan",
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
            "auteur": "juvan",
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

function getMars() {
    let data = {
        "nom": "Mars",
        "categorie": "planete",
        "auteur": "rouxy",
        "type": "tellurique",
        "taille": 3389.5,
        "distanceTerre": 8.6,
        "distanceEtoile": 1.38,
        "systemePlanetaire": "system solaire",
        "etoile": "soleil",
        "galaxie": "voie lactée",
        "pesanteur": 3.7,
        "temperatureMoyenne": -63,
        "satellites": {
            "1": "Phobos",
            "2": "Déimos"
        },
        "image": "https://www.slate.fr/sites/default/files/styles/1060x523/public/planet-volumes-4irvnspwk48-unsplash.jpg"
    }
    return new Astre(data)
}

function getTitan() {
    let data = {
        "nom": "Titan",
        "categorie": "Lune",
        "auteur": "juvan",
        "type": "Télurique",
        "taille": "5000",
        "distanceTerre": "10",
        "distanceEtoile": "",
        "systemePlanetaire": "Solaire",
        "etoile": "",
        "galaxie": "Voie lactée",
        "pesanteur": "1.353",
        "temperatureMoyenne": "-180",
        "image": "https://www.numerama.com/wp-content/uploads/2017/02/titan-1.jpg"
    }
    return new Astre(data)
}

function getSoleil() {
    let data = {
        "nom": "Soleil",
        "categorie": "étoile",
        "auteur": "juvan",
        "type": "naine jaune",
        "taille": "1392680",
        "distanceTerre": "1",
        "distanceEtoile": "",
        "systemePlanetaire": "Solaire",
        "etoile": "",
        "galaxie": "273.95",
        "pesanteur": "",
        "temperatureMoyenne": "5504.85",
        "image": "https://cdn.futura-sciences.com/sources/images/GSFC_20171208_Archive_e001435_orig.jpg"
    }

    return new Astre(data)
}

function getPluton() {
    let data = {
        "nom": "pluton",
        "categorie": "planète",
        "auteur": "juvan",
        "type": "naine",
        "taille": "1200",
        "distanceTerre": "10",
        "distanceEtoile": "",
        "systemePlanetaire": "Solaire",
        "etoile": "",
        "galaxie": "Voie lactée",
        "pesanteur": "",
        "temperatureMoyenne": "-400",
        "image": "https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=50,format=auto/sources/images/Pluton_illustration.jpg",
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
    getAstresFixtures,
    getUserFixture
}
