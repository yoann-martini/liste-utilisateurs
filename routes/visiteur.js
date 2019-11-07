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
       
            var date = Date.now();
            console.log(date);

       /* console.log(users[0]._id);
        console.log(date);*/

/*utilisateur.findOneAndUpdate({_id:users[0]._id},{datechoisi:date[0]});*/

           var findAndUpdate = function(users, done) {
     
          
           utilisateur.findOneAndUpdate(
              {_id: users[0]._id},
              {datechoisi: date},
              {new: true},
              (err, data) => {
                if (err) return done(err, data);
                console.log(data);
                return done(null, data);
              }
            );
          };
findAndUpdate(users, function (data){return data});


        
        /*await utilisateur.create({_id: users[0]._id });

        const filter = {_id: users[0]._id };
        var date = Date.now();
        const update = { datechoisi: date };
        
        // `doc` is the document _before_ `update` was applied
        let doc = await utilisateur.findOneAndUpdate(filter, update);
        doc._id; // 'Jean-Luc Picard'
        doc.datechoisi; // undefined
        
        doc = await utilisateur.findOne(filter);
        doc.datechoisi; // 59*/


        


     



     




        res.render('visiteur', { title : 'Utilisateur random', utilisateurs : users }); 
      });



    
  });

module.exports = router;