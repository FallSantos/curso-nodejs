const express = require('express')
const handlebars = require('express-handlebars')

require('dotenv').config()

require('./db')

const app = express()

// Config
    // Template engine
    app.engine('handlebars', handlebars())
    app.set('view engine', 'handlebars')
    app.set('views', 'app/views')

    // Rotas
    const blog = require('../routes/blog') 
    const news = require('../routes/news')
    const admin = require('../routes/admin')

    app.use('/', blog)

    app.use('/noticias', news)

    app.use('/admin', admin)

    app.set('port', process.env.PORT) 

module.exports = {
    app,
    express
}