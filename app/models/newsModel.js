module.exports = function() {
    this.getNews = function(connection, callback) {
        connection.query('select * from news', callback);
    }

    this.getPieceOfNews = function(connection, callback) {
        connection.query('select * from news where id_news', callback);
    }

    return this;
};