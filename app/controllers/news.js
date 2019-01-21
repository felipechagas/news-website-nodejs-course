module.exports.news = function(app, req, res) {
    var connection = app.config.dbConnection();
    var newsModel = new app.models.NewsDAO(connection);
    
    newsModel.getNews(function(error, result){
        res.render("ejs/noticias/noticias", {noticias : result});
    }); 
}

module.exports.piece_of_new = function(app, req, res) {
    var connection = app.config.dbConnection();      
    var newsModel = new app.models.NewsDAO(connection);
    
    newsModel.getPieceOfNews(function(error, result){
        res.render("ejs/noticias/noticia", {noticias : result}); 
    });
}