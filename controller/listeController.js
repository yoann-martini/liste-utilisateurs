var utilisateur = require('../models/utilisateurModel');
var controller={}


controller.liste = (req,res) =>{
utilisateur.find(null, function (err, users) {
    if (err) { throw err; }
    // comms est un tableau de hash
    res.render('liste', { title : 'Liste utilisateurs', utilisateurs : users }); 
  });

}

module.exports = controller;