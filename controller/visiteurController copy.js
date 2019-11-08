var utilisateur = require('../models/utilisateurModel');
var controller={}

controller.display = async (req,res) =>{
  users= await utilisateur.find({datechoisi:new Date().getDate())});
  res.render('visiteur', { title : 'Liste utilisateurs', utilisateurs : users }); 
});


controller.update = (req,res) =>{
  var date = Date.now();

  var findAndUpdate = function(users, done) {

 utilisateur.findOneAndUpdate(
     {_id: users[0]._id},
     {datechoisi: date,choisi:true},
     {new: true},
     (err, data) => {
       if (err) return done(err, data);
       console.log(data);
       return done(null, data);
     }
   );
 };
findAndUpdate(users, function (data){return data});
});

}



controller.random = (req,res) =>{

utilisateur.aggregate([{$sample:{size:1}}],(err, users)=> {
        if (err) { throw err; }
       
      controller.update()
      controller.display()


    /*res.render('visiteur', { title : 'Liste utilisateurs', utilisateurs : users }); */
    return users();
  });
}

module.exports = controller;

/*si ( datechoisi==aujourd'hui ){
afficher cette entrée
}sinon si(tout le monde choisi (0 false du champ choisi)){
  remettre tout les choisis a zero et random
}sinon { random sur tous ceux qui ne sont pas choisi
}*/





