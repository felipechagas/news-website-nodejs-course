module.exports.index = function(app, req, res) {

    var connection = app.config.dbConnection();
    var newsModel = new app.models.NewsDAO(connection);

    newsModel.getLastNews(function(erro, result){
        res.render("ejs/home/index", {news: result});
    }); 
}