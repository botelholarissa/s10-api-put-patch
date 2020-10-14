const express = require('express')
const app = express() //instanciando
const router = require('./routes/musicasRoute')

app.use(express.json())
app.use('/', router)

module.exports = app