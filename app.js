var express = require('express');
var msg = require('./mod_teste');

var app = express();

app.set('view engine', 'ejs');
//app.set('view engine', 'vue'); 


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
    console.log(msg());
});
