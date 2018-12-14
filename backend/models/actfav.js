const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const actorsFavoriteSchema = new Schema({
    _id: Number,
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    favorite: Boolean
});

const actorsFavoriteModel = mongoose.model('actorsFavorite', actorsFavoriteSchema);

module.exports = actorsFavoriteModel;
