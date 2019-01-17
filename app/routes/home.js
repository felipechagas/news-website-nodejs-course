module.exports = function(app) {  
    app.get('/', function(req, res) {
        res.render("ejs/home/index");
    });
};