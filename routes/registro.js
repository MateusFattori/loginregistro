module.exports = (app)=>{
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
            var documento = new usuarios({
                nome:req.body.nome,
                email:req.body.email,
                senha:req.body.senha
            }).save()
            res.render('login.ejs')
        }
    })
}