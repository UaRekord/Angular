const express = require('express');
const router = express.Router();
const filmfavoriteModel = require('../src/models/filmfav');
const mongoose = require('mongoose');

/* filmfavorite. */
router.post('/favorites/:id', (req, res) => {
    const favorite = new filmfavoriteModel({
        _id: req.params.id,
        favorite: true
    });
    favorite.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send(favorite);
            console.log('data sent and save OK');
        }
    })
}).get('/favorites', (req, res) => {
    filmfavoriteModel.find({ }, { _id: 1 }, (err, favorites) => {
      if (err) {
        res.sendStatus(500)
      } else {
        console.log('data is received OK');
        res.send(favorites.map(a => a._id));
      }
  }); 
}).get('/favorite', (req, res) => {
    let query = { _id: { $in: req.query.filmIds.split(',')}};
    filmfavoriteModel.find(query, (err, favorites) => {
      if (err) {
        res.sendStatus(500);
      } else {
        console.log('favorite films received'); 
        res.send(favorites);
      }
  }); 
}).delete('/favorites/:id', (req, res) => {
    let query = {_id: req.params.id };
        filmfavoriteModel.remove(query, (err) => {
            if (err) {
                res.sendStatus(500);
            } else {
                console.log('if record', query, 'existed', 'now it is removed');
            }
        });
});

module.exports = router;
