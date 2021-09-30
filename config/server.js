var express = require('express')
var app = express()

var porta = process.env.PORT || 3030

module.exports = {app,porta}