module.exports = (app)=>{
    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    app.post('/registro',(req,res)=>{
        var conexao = require('../cofing/database')()
        var usuarios = require('../models/usuarios')

        usuarios.findOne({email:req.body.email})
        if(!usuario){
            res.send("esse email não está cadastrado")
        }
    })
}