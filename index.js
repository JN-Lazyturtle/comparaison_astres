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
    res.send('Bienvenue sur Astres à comparer !')
})

app.get('/astres', async function(reg, res) {
    let response = await astresControler.getAllAstres()
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")
    res.send(response)
})

app.post('/astre', async function(req, res) {
    let response = await astresControler.saveAstre(req.body)
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080")
    res.send(response)
})

