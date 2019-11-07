var utilisateur = require('../models/utilisateurModel');
var controller={}

var fileUpload = require('express-fileupload');




controller.stock = (req,res) =>{
/* stocker dans bdd*/ 









    console.log(req);
     var monUtilisateur = new utilisateur({ nom : req.body.nom,  prenom : req.body.prenom , genre : req.body.genre , choisi : 0, photo : req.files.photo.name, domaine : req.body.domaine, dob : req.body.dob, ville : req.body.ville });
    
    
     monUtilisateur.save(function (err) {
      if (err) { throw err; }
      console.log('Opération ajouté avec succès !');
      // On se déconnecte de MongoDB maintenant
    });
    
    /*console.log(req.files);*/
    
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let fichier = req.files.photo;
    
    
    
    // Use the mv() method to place the file somewhere on your server
    fichier.mv('uploads/'+fichier.name, function(err) {
      if (err)
        return res.status(500).send(err);
      res.redirect('/');
    });
    
    


}

module.exports = controller;