const express = require('express')
const app = express()
const productRoutes = require('./api/routes/predict')


app.use('/',productRoutes)

module.exports = app