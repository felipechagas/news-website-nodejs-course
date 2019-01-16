var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.set('view engine', 'vue'); 

app.get('/', function(req, res) {
    res.send("<html><body>Teste</body></html>");
});

app.get('/tec', function(req, res) {
    res.send("<html><body>Tec</body></html>");
});

app.listen(3000, function() {
    console.log("servidor rodando com express");
});
