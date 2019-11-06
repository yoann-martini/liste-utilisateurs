var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateurModel');


/* GET home page. */
router.get('/liste', function(req, res, next) {
utilisateur.find(null, function (err, users) {
    if (err) { throw err; }
    // comms est un tableau de hash
    res.render('liste', { title : 'Liste utilisateurs', utilisateurs : users }); 
  });

 
});


module.exports = router;
