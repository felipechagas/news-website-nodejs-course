module.exports = function(application) {  
    
    application.get('/noticias', function(req, res) {

        var connection = application.config.dbConnection();
        var newsModel = application.app.models.newsModel;

        newsModel.getNews(connection, function(error, result){
            res.render("ejs/noticias/noticias", {noticias : result}); 
        });
    });
};