var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateurModel');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 


router.post('/add', function(req, res){
  /*var operation=req.body.name;*/
 /* console.log(req.body.signe.toString());*/

 var monUtilisateur = new utilisateur({ nom : req.body.nom,  prenom : req.body.prenom , genre : req.body.genre , choisi : 0, datechoisi : null, photo : null, domaine : req.body.domaine, dob : req.body.dob, ville : req.body.ville });


 monUtilisateur.save(function (err) {
  if (err) { throw err; }
  console.log('Opération ajouté avec succès !');
  // On se déconnecte de MongoDB maintenant
});
res.redirect('/');
});
module.exports = router;
