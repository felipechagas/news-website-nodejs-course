module.exports = function(app) {  
    app.get('/noticias', function(req, res) {
        res.render("ejs/noticias/noticias");
    });
}