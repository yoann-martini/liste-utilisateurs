var utilisateur = require('../models/utilisateurModel');
var controller={}
var moment = require('moment');

controller.random = (req,res) =>{


/*si ( datechoisi==aujourd'hui ){
afficher cette entrée
}sinon si(tout le monde choisi (0 false du champ choisi)){
  remettre tout les choisis a zero et random
}sinon { random sur tous ceux qui ne sont pas choisi
}*/

 var date = moment().format('YYYY-MM-DD');


utilisateur.find({datechoisi:new Date(date)}, (err, user)=> {
  console.log(date);
  if (err) { throw err; }
  console.log(err);

console.log(moment(user[0].datechoisi).format('YYYY-MM-DD')==date);



/*console.log(find);*/

if(moment(user[0].datechoisi).format('YYYY-MM-DD')==date){
  console.log("date choosi")
  res.render('visiteur', { title : 'Liste utilisateurs', utilisateurs : user }); 

}

});



utilisateur.aggregate([{$sample:{size:1}}],(err, users)=> {
        if (err) { throw err; }
       
           

           var findAndUpdate = function(users, done) {
     
          utilisateur.findOneAndUpdate(
              {_id: users[0]._id},
              {datechoisi: date,choisi:true},
              {new: true},
              (err, data) => {
                if (err) return done(err, data);
               /* console.log(data);*/
                return done(null, data);
              }
            );
          };
findAndUpdate(users, function (data){return data});
    res.render('visiteur', { title : 'Liste utilisateurs', utilisateurs : users }); 
  });
}

module.exports = controller;




