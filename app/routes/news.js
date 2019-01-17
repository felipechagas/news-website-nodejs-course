module.exports = function(app) {  
    
    app.get('/noticias', function(req, res) {
        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'root',
            database : 'news_portal'
        });

        connection.query('select * from news;', function(error, result){
            res.render("ejs/noticias/noticias", {noticias : result}); 
        });
    });
}