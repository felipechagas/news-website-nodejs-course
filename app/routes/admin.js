module.exports = function(app) {  
    app.get('/form', function(req, res) {
        res.render("ejs/admin/form_add_noticia");
    });

    app.post('/news/save', function(req, res) {
        var news = req.body;

        var connection = app.config.dbConnection();
        var newsModel = new app.models.NewsDAO(connection);
        
        newsModel.postNews(news, function(error, result){
            res.redirect('/noticias');
        });

        
    });
}