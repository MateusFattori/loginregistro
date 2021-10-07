module.exports = (app)=>{
    //Importar o bcrypt
    var bcrypt = require('bcrypt')

    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    app.post('/registro',async(req,res)=>{
        var conexao = require('../config/database')()
        var usuarios = require('../models/usuarios')

        var usereexiste = await usuarios.findOne({email:req.body.email})
        if(usereexiste){
            return res.send('Email já cadastrado')
        }else{
            var senhasegura = await bcrypt.hash(req.body.senha,12)
            var documento = new usuarios({
                nome:req.body.nome,
                email:req.body.email,
                senha:senhasegura
            }).save()
            res.render('login.ejs')
        }
    })
}