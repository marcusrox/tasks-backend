const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign');

consign()
    .then('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.get('/', (request, response) => {
    response.status(200).send('Meu backend ' + new Date())
})

app.listen(3001, () => {
    console.log('Backend rodando na porta 3001')
})