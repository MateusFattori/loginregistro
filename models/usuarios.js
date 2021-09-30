var mongoose = require('mongoose')

var modelo = new mongoose.Shema({
    nome:String,
    email:String,
    senha:String
})
module.exports = mongoose.model('usuarios',modelo)