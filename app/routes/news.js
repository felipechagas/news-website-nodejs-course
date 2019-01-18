module.exports = function(app) {  
    
    app.get('/noticias', function(req, res) {

        var connection = app.config.dbConnection();
        var newsModel = new app.models.NewsDAO(connection);
        
        newsModel.getNews(function(error, result){
            res.render("ejs/noticias/noticias", {noticias : result});
        }); 
    });
};