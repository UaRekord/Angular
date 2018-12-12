const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

class MongoManager {
    constructor (config) {
        this._config = config;
    } 
    getMongoUrl() {
        return this._config.MONGODB_URI;
    }
    connect() {
        const connect = mongoose.connect(this.getMongoUrl(), { useNewUrlParser: true }); 
        const db = mongoose.connection;
        db.on('error', err => console.error('error', err));
        db.once('open', () => console.log('connect to film_app_db is OK'));
        return connect;
    }
}

module.exports = MongoManager;
