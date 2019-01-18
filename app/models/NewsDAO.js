function NewsDAO(connection) {
    this._connection = connection
}

NewsDAO.prototype.getNews = function(callback) {
    this._connection.query('select * from news', callback);
}

NewsDAO.prototype.getPieceOfNews = function(callback) {
    this._connection.query('select * from news where id_news = 1', callback);
}

NewsDAO.prototype.postNews = function(news, callback) {
    this._connection.query('insert into news set ?', news, callback);
}

module.exports = function() {
    return NewsDAO;
};