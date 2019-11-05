var express = require('express');
var router = express.Router();
var utilisateur = require('../models/utilisateurModel');
/*var fileupload = require ('express-fileupload');
app.use(fileupload());*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 


router.post('/add', function(req, res){
  /*var operation=req.body.name;*/
 /* console.log(req.body.signe.toString());*/
console.log(req);
 var monUtilisateur = new utilisateur({ nom : req.body.nom,  prenom : req.body.prenom , genre : req.body.genre , choisi : 0, datechoisi : null, photo : req.body.photo, domaine : req.body.domaine, dob : req.body.dob, ville : req.body.ville });


 monUtilisateur.save(function (err) {
  if (err) { throw err; }
  console.log('Opération ajouté avec succès !');
  // On se déconnecte de MongoDB maintenant
});
res.redirect('/');
});
module.exports = router;
