module.exports = function(app) {  
    app.get('/formulario_inclusao_noticia', function(req, res) {
        res.render("ejs/admin/form_add_noticia");
    });
}