// modules externes
const express = require('express')
const app = express()

app.use(express.json())

// controlers
const astresControler = require('./controler/astresControler')

app.listen(3000, function() {
    console.log('App listening on port 3000!')
})

app.get('/', function(req, res) {
    res.send("Bienvenue sur l'API de Astres à comparer !")
})

app.get('/astres', async function(reg, res) {
    let response = await astresControler.getAllAstres()
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})

app.get('/astreByID/:astreID', async function(req, res) {
    let response = await astresControler.getAstreByID(req.params.astreID)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})

app.get('/astreByField/:field/:regex', async function(req, res) {
    let response = await astresControler.getAstreByField(req.params.field, req.params.regex)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})

app.post('/astre', async function(req, res) {
    let response = await astresControler.saveAstre(req.body)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})

app.post('/loadFixtures', async function(req, res) {
    let response = await astresControler.loadFixtures()
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})

app.post('/utilisateur', async function(req, res) {
    console.log("utilisateur :" + JSON.stringify(req.body))
    let response = await connexion.saveObject(req.body, utilisateursUrl)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})



const passport = require('passport')
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')
const connexion = require("./DB/connexionDB");
const {utilisateursUrl} = require("./DB/connexionDB");
const {json} = require("express");

const secret = 'thisismysecret'
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

async function getUtilisateur(login) {
    let userTab = await connexion.getUtilisateur(login)
    if(userTab.length == 1) {
        return userTab[0]
    }

}

passport.use(
    new JwtStrategy(jwtOptions, async function(payload, next) {
        const user = await getUtilisateur(payload.login)

        if (user) {
            next(null, user)
        } else {
            next(null, false)
        }
    })
)

app.use(passport.initialize())

app.use(express.json())

app.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send("vous accedez à l'éspace privé")
})

app.post('/login', async (req, res) => {
    const login = req.body.login
    const mdp = req.body.mdp


    console.log(req.body)

    if (!login || !mdp) {
        res.status(401).json({ error: 'Email or password was not provided.' })
        return
    }

    const user = await getUtilisateur(login)

    if (!user || user.mdp !== mdp) {
        res.status(401).json({ error: 'Email / password do not match.' })
        return
    }

    const userJwt = jwt.sign({ login: user.login }, secret)

    res.json({ jwt: userJwt })
})


