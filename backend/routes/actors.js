const express = require('express');
const router = express.Router();
const controller = require('../controllers/actors');

/* actorfavorite. */
router.post('/favorites/:id', controller.save)
.get('/favorites', controller.read)
.delete('/favorites/:id', controller.remove);

module.exports = router;