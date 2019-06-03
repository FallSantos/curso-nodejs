const express = require('express')

const router = express.Router()

const blog = require('../controllers/blogController')

router.get('/', blog.index)

module.exports = router