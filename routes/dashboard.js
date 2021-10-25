module.exports = (app)=>{
    var conexao = require("../config/database")
    var usuarios = require("../models/usuarios")
    var atividades = require("../models/atividades")
    
    app.get('/dashboard',async(req,res)=>{
        var id = req.query.id
        console.log(id)
        if(!id){
            res.redirect('/login')
        }else{
            var userexiste = await usuarios.finOne({_id:id})
            if(userexiste){
                res.render('dashboard.ejs',{login:userexiste})
            }else{
                res.redirect("/login")
            }
        }   
        res.render('dashboard.ejs',{login:{nome:'teste', _id:'teste'}})
    })

    app.post('/dashboard',async(req,res)=>{
        var dados = req.body

        var novo = await new atividades({
            data: dados.data,
            tipo: dados.tipo,
            entrega: dados.entrega,
            disiclina: dados.disiclina,
            instrucoes: dados.instrucoes,
            user: dados.id
        }).save()
        .then((result)=>{
            res.redirect('/dashboard?id='+dados.id)
        })
    })
}