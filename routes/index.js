var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController');
var app =express();

router.post('/stock', indexController.stock);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Liste utilisateurs' });
});

 





module.exports = router;
