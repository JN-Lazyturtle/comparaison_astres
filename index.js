// modules externes
const express = require('express')
const app = express()
// const fs = require("fs");
// const util = require("util");

// controlers
const astresControler = require('./controler/astresControler')

app.listen(3000, function() {
    console.log('App listening on port 3000!')
})

app.get('/', function(req, res) {
    res.send('Bienvenue sur Astres à comparer !')
})

app.get('/astres', async function(reg, res) {
    let response = await astresControler.getAllAstres
    res.send(response)
})

// app.post('/saveObject', async function(req, res) {
//     let readFileSync = util.promisify(fs.readFileSync)
//     let JSONdata = JSON.parse(fs.readFileSync('astres.json'))
//     let response = await connection.saveObject(JSONdata, connection.astresUrl)
//     res.send(response)
// })

