var http = require('http');

var server = http.createServer(function(req, res) {
    var categoria = req.url;

    if(categoria == "/tecnologia") {
        res.end("<html><body>Tec</body></html>");
    } else if (categoria == "/moda") {
        res.end("<html><body>Moda</body></html>");
    }

    res.end("<html><body>Portal de notícias</body></html>");
});

server.listen(3000);