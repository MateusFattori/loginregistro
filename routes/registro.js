module.exports = (app)=>{
    //Importar o bcrypt
    var bcrypt = require('bcryptjs')

    app.get('/registro',(req,res)=>{
        res.render('registro.ejs')
    })

    app.post('/registro',async(req,res)=>{
        var conexao = require('../config/database')()
        var usuarios = require('../models/usuarios')

        var userexiste = await usuarios.findOne({email:req.body.email})
        if(userexiste){
            //return res.send('Email já cadastrado')
            return res.render('registro.ejs',{mensagem:'Email já Cadastrado'})
        }else{
            var senhasegura = await bcrypt.hash(req.body.senha,12)
            var documento = new usuarios({
                nome:req.body.nome,
                email:req.body.email,
                senha:senhasegura
            }).save()
            res.redirect('/login')
        }
    })
}