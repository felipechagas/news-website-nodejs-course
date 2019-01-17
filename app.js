var app = require('./config/server');

app.get('/', function(req, res) {
    res.render("ejs/home/index");
});

app.get('/formulario_inclusão_noticia', function(req, res) {
    res.render("ejs/admin/form_add_noticia");
});

app.get('/noticias', function(req, res) {
    res.render("ejs/noticias/noticias");
});

app.listen(3000, function() {
    console.log("Running on http://localhost:1234");
});
