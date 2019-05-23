const express = require('express')

const app = express()

// Rotas
app.get('/', (req, res) => {
    res.send("Seja Wellcome!")
})

app.set('port', 8081)

module.exports = app