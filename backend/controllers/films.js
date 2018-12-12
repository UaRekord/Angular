const filmfavoriteModel = require('../models/filmfav');

module.exports.save = (req, res) => {
    const favorite = new filmfavoriteModel({
        _id: req.params.id,
        favorite: true,
        user: 'root'
    });
    favorite.save((err) => {
        (err) ? res.sendStatus(205) : res.send(favorite);
    })
}

module.exports.read = (req, res) => {
    filmfavoriteModel.find({ }, { _id: 1 }, (err, favorites) => {
        (err) ? res.sendStatus(500) : res.send(favorites.map(a => a._id));
    }); 
}

module.exports.remove = (req, res) => {
    let query = {_id: req.params.id };
        filmfavoriteModel.remove(query, (err) => {
            (err) ? res.sendStatus(205) : res.sendStatus(200);
    });
}