var mongoose = require('mongoose')
var conexao = ()=>{
    mongoose.connect('mongodb+srv://registrouser:rm14644@cluster0.3bykg.mongodb.net/login_registro?retryWrites=true&w=majority')
}
module.exports = conexao