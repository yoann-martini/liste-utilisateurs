var express = require('express');
var router = express.Router();
var visiteurController = require('../controller/visiteurController');

router.get('/visiteur', visiteurController.random);

module.exports = router;