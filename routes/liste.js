var express = require('express');
var router = express.Router();
var listeController = require ('../controller/listeController');


/* GET home page. */
router.get('/liste',listeController.liste);




module.exports = router;
