module.exports = function(app) {  
    app.get('/', function(req, res) {
        app.controllers.home.index(app, req, res);
    });
};