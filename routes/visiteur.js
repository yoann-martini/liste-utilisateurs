var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateurModel');

router.get('/visiteur', function(req, res, next) {

   /* if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }
    res.end();*/




    utilisateur.aggregate([{$sample:{size:1}}],(err, users)=> {
        if (err) { throw err; }
        // comms est un tableau de hash
     /* a modif
        var date = Date.now();
        date = "08/09/1981";

        console.log(users[0]._id);
        console.log(date);
        utilisateur.findOneAndUpdate({_id:users[0]._id},{datechoisi:date});*/


        res.render('visiteur', { title : 'Liste utilisateurs', utilisateurs : users }); 
      });



    
  });

module.exports = router;