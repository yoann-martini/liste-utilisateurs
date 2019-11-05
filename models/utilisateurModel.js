//pour mongoose
var mongoose = require('mongoose');
bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/listeutilisateurs', function(err) {
  if (err) { throw err; }
});
//fin

// Création du schéma pour les commentaires
var utilisateurSchema = new mongoose.Schema({
  nom : String,
  prenom : String,
  genre : String,
  choisi : { type : Boolean, default :0 },
  datechoisi : { type : Date, default: null },
  photo : String,
  domaine : String,
  dob : { type : Date, default : null },
  ville : String
});
 
// Création du Model pour les commentaires
var UtilisateurSchemaModel = mongoose.model('utilisateur', utilisateurSchema);
 
module.exports = UtilisateurSchemaModel;