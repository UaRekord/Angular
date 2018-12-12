const actorFavoriteModel = require('../models/actfav');

module.exports.save = (req, res) => {
    const favorite = new actorFavoriteModel({
        _id: req.params.id,
        favorite: true,
        user: "root"
    });
    favorite.save((err) => {
        (err) ? res.sendStatus(205) : res.send(favorite);
    });
}

module.exports.read = (req, res) => {
    actorFavoriteModel.find({ }, { _id: 1 }, (err, favorites) => {
        (err) ? res.sendStatus(500) : res.send(favorites.map(a => a._id));
    }); 
}

module.exports.remove = (req, res) => {
    let query = {_id: req.params.id };
        actorFavoriteModel.remove(query, (err) => {
            (err) ? res.sendStatus(205) : res.sendStatus(200);
    });
}