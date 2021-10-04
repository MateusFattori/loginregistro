module.exports = (app)=>{
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    app.post('/registro',(req,res)=>{
        var conexao = require('../config/database')()
        var usuarios = require('../models/usuarios')

        usuarios.findOne({email:req.body.email})
        if(!usuarios){
            res.send("esse email não está cadastrado")
        }
    })
}