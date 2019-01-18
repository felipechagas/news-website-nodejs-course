module.exports = function(app) {  
    
    app.get('/noticia', function(req, res) {

        var connection = app.config.dbConnection();      
        var newsModel = new app.models.NewsDAO(connection);
        
        newsModel.getPieceOfNews(function(error, result){
            res.render("ejs/noticias/noticias", {noticias : result}); 
        });
    });
};