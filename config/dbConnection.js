var mysql = require('mysql');

var connMySQL = function() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'news_portal'
    });
}

module.exports = function() {
    console.log("Modulo MySQL inniciado");

    return connMySQL;
} 