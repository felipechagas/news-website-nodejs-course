module.exports = function(app) {  
    app.get('/news', function(req, res) {
        app.controllers.news.news(app, req, res);
    });

    app.get('/piece-of-news', function(req, res) {
        app.controllers.news.piece_of_new(app, req, res);
    });
};