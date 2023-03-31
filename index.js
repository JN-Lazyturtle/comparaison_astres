// modules externes
const express = require('express')
const cors = require('cors');
const app = express()

// controlers
const astresControler = require('./controller/astreController')
const {passport} = require("./controller/utilisateurController");
const utilisateur = require("./controller/utilisateurController");

// init
app.use(passport.initialize())
app.use(express.json())
app.use(cors())


app.listen(3000, function() {
    console.log('App listening on port 3000!')
})

app.get('/', function(req, res) {
    res.send("Bienvenue sur l'API de Astres à comparer !")
})

app.get('/astres', async function(reg, res) {
    let response = await astresControler.getAllAstres()
    res.send(response)
})

app.get('/astreByID/:astreID', async function(req, res) {
    let response = await astresControler.getAstreByID(req.params.astreID)
    res.send(response)
})

app.get('/astreByField/:field/:regex', async function(req, res) {
    let response = await astresControler.getAstreByField(req.params.field, req.params.regex)
    res.send(response)
})

app.get('/astreByAuteur/:auteur', async function(req, res) {
    let response = await astresControler.getAstreByAuteur(req.params.auteur)
    res.send(response)
})

app.post('/astre', cors(), passport.authenticate('jwt', { session: false }), async function(req, res) {
    const tokenHeader = req.headers.authorization;
    const token = tokenHeader.split(' ')[1];
    let response = await astresControler.saveAstre(req.body, token)
    res.send(response)
})

app.post('/loadFixtures', async function(req, res) {
    let response = await astresControler.loadFixtures()
    res.send(response)
})

app.post('/signIn', async function(req, res) {
    let response = await utilisateur.saveUtilisateur(req.body)
    res.send(response)
})

// app.get('/admin', passport.authenticate('jwt', { session: false }), (req, res) => {
//     res.send("vous accedez à l'espace privé")
// })

app.post('/logIn', async (req, res) => {
    let response = await utilisateur.connexionUtilisateur(req.body.login, req.body.mdp)
    res.send(response)
})

app.delete('/deleteAstre/:astreId',  passport.authenticate('jwt', { session: false }), async (req, res) => {
    const tokenHeader = req.headers.authorization;
    const token = tokenHeader.split(' ')[1];
    let response = await astresControler.deleteAstre(req.params.astreId, token)
    res.send(response)
})

app.put('/updateAstre/',  passport.authenticate('jwt', { session: false }), async (req, res) => {
    const tokenHeader = req.headers.authorization;
    const token = tokenHeader.split(' ')[1];
    let response = await  astresControler.update(req.body, token)
    res.send(response)
})


