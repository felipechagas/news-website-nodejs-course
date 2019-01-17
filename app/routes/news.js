var dbConnection = require('../../config/dbConnection')

module.exports = function(app) {  
    
    app.get('/noticias', function(req, res) {

        var connection = dbConnection();        

        connection.query('select * from news;', function(error, result){
            res.render("ejs/noticias/noticias", {noticias : result}); 
        });
    });
}