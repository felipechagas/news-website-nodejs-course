var app = require('./config/server');

var routeNews = require('./app/routes/news')(app);

var routeHome = require('./app/routes/home')(app);

var routeForm = require('./app/routes/form')(app);

app.listen(3000, function() {
    console.log("Running on http://localhost:1234");
});
