const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.status(200).send('Meu backend')
})

app.listen(3001, () => {
    console.log('Backend rodando na porta 3001')
})