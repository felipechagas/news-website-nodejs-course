module.exports = function(app) {  
    app.get('/form', function(req, res) {
        res.render("ejs/admin/form_add_noticia");
    });

    app.post('/news/save', function(req, res) {
        var news = req.body;

        req.assert('headline','Titulo obrigatorio').notEmpty();
        req.assert('resume','Resumo obrigatorio').notEmpty();
        req.assert('resume','entre 10 e 100').len(10, 100);
        req.assert('author','Autor obrigatorio').notEmpty();
        // req.assert('dt_news','entre 10 e 100').notEmpty().isDate({format:'YYYY-MM-DD'});
        req.assert('dt_news','entre 10 e 100').notEmpty();
        req.assert('news','Noticia obrigatoria').notEmpty();
 
        var erros = req.validationErrors();

        if(erros) {
            res.render("ejs/admin/form_add_noticia");

            return;
        }

        var connection = app.config.dbConnection();
        var newsModel = new app.models.NewsDAO(connection);
        
        newsModel.postNews(news, function(error, result){
            res.redirect('/noticias');
        });

        
    });
}