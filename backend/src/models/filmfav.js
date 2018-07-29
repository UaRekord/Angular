const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const filmFavoriteSchema = new Schema({
    _id: Number,
    favorite: Boolean
});

const filmFavoriteModel = mongoose.model('FilmFavorite', filmFavoriteSchema);

module.exports = filmFavoriteModel;
