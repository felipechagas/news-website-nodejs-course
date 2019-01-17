module.exports = function(app) {  
    
    app.get('/noticia', function(req, res) {

        var connection = app.config.dbConnection();      
        var newsModel = app.app.models.newsModel;
        
        newsModel.getPieceOfNews(connection, function(error, result){
            res.render("ejs/noticias/noticias", {noticias : result}); 
        });
    });
};