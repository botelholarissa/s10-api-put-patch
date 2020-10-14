const express = require('express')
const router = express.Router()
const controller = require('../controllers/gamesController')
const cors = require('cors')

router.put('/jogos/:id', cors(), controller.updateName)

module.exports = router