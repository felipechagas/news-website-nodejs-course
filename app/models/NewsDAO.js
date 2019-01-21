function NewsDAO(connection) {
    this._connection = connection
}

NewsDAO.prototype.getNews = function(callback) {
    this._connection.query('select * from news', callback);
}

NewsDAO.prototype.getPieceOfNews = function(callback) {
    this._connection.query('select * from news where id_news = 7', callback);
}

NewsDAO.prototype.postNews = function(news, callback) {
    this._connection.query('insert into news set ?', news, callback);
}

NewsDAO.prototype.getLastNews = function(callback) {
    this._connection.query('select * from news order by dt_creation desc limit 5', callback);
}

module.exports = function() {
    return NewsDAO;
};