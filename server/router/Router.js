const express = require('express')
const router = express.Router()

const middle = require('../middle/middle')
const controller = require('../controllers/Main')

router.post('/keyword', middle.checkKeyword,controller.getData)
router.post('/article', controller.article)

module.exports = router