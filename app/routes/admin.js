const express = require('express')

const router = express.Router()

const admin = require('../controllers/adminController')

router.get('/noticias/', admin.show)

router.get('/noticia/:id', admin.showOne)

module.exports = router