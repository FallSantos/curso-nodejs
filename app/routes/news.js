const express = require('express')

const router = express.Router()

const news = require('../controllers/newsController')

router.get('/', news.index)

module.exports = router