var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateurModel');

router.get('/visiteur', function(req, res, next) {
    utilisateur.aggregate([{$sample:{size:1}}],(err, users)=> {
        if (err) { throw err; }
        // comms est un tableau de hash
        res.render('visiteur', { title : 'Liste utilisateurs', utilisateurs : users }); 
      });
    
  });

module.exports = router;