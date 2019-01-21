module.exports = function(app) {  
    app.get('/form', function(req, res) {
        app.controllers.admin.form(app, req, res);
    });

    app.post('/news/save', function(req, res) {
        app.controllers.admin.save_news(app, req, res);        
    });
}