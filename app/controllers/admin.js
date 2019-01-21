module.exports.form = function(app, req, res) {
    res.render("ejs/admin/form_add_noticia", {validation: {}, news: {}});
}

module.exports.save_news = function(app, req, res) {
    var news = req.body;

    req.assert('headline','Titulo obrigatorio').notEmpty();
    req.assert('short','Resumo obrigatorio').notEmpty();
    req.assert('short','entre 10 e 100').len(10, 100);
    req.assert('author','Autor obrigatorio').notEmpty();
    // req.assert('dt_news','entre 10 e 100').notEmpty().isDate({format:'YYYY-MM-DD'});
    req.assert('dt_news','entre 10 e 100').notEmpty();
    req.assert('new','Noticia obrigatoria').notEmpty();

    var erros = req.validationErrors();

    if(erros) {
        res.render("ejs/admin/form_add_noticia", {validation: erros, news: news});

        return;
    }

    var connection = app.config.dbConnection();
    var newsModel = new app.models.NewsDAO(connection);
    
    newsModel.postNews(news, function(error, result){
        res.redirect('/news');
    });
}