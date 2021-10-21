module.exports = (app)=>{
    app.get('/dashboard',(req,res)=>{
        res.render('dashboard.ejs',{login:{nome:'teste', _id:'teste'}})
    })
}