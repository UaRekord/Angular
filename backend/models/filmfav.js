const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const filmFavoriteSchema = new Schema({
    _id: Number,
    user: String,
    favorite: Boolean
});

const filmFavoriteModel = mongoose.model('filmFavorite', filmFavoriteSchema);


module.exports = filmFavoriteModel;
