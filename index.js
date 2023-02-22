// modules externes
const express = require('express')
const app = express()

app.use(express.json())

// controlers
const astresControler = require('./controller/astreController')

const {passport} = require("./controller/utilisateurController");
const utilisateur = require("./controller/utilisateurController");
app.use(passport.initialize())
app.use(express.json())


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

app.post('/signIn', async function(req, res) {
    let response = await utilisateur.saveUtilisateur(req.body)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})

app.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.send("vous accedez à l'espace privé")
})

app.post('/logIn', async (req, res) => {
    let response = await utilisateur.connexionUtilisateur(req.body.login, req.body.mdp)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(response)
})

