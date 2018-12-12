const express = require('express');
const router = express.Router();
const controller = require('../controllers/films');

/* filmfavorite. */
router.post('/favorites/:id', controller.save)
.get('/favorites', controller.read)
.delete('/favorites/:id', controller.remove);

module.exports = router;