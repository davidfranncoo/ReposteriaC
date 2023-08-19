var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var {User} = require('../db');

var router = express.Router();
 

//?------------------ verificaion de user y contraseña ----- 

passport.use(new LocalStrategy(
    function(username, password, done) {
      //?tener en cuenta que aquii se debe arrojar error cuando el password es incorecto
      //? y no cuando el usuario es incorrecto, evitando posibles hackeos
   
      User.findOne({
        where: {
            email: username
          }
      })
        .then((user) => {
          if(!user) {
            return done(null, false);
          }

          if(user.password != password) {
            return done(null, false);
          }
        
    
          return done(null, user);
          
        })
      .catch(err => {
        return done(err);
      })
    }));

//?----- conservar la sesion

passport.serializeUser(function(user, done) {
  console.log("serializacionnnnnnn",user.id)
  done(null, user.id);
});

// Al deserealizar la información del usuario va a quedar almacenada en req.user

passport.deserializeUser(function(id, done) {
  User.findOne({where:{
        id:id
       }})
    .then((user) => {
      done(null, user);
    })
    .catch(err => {
      return done(err);
    })
});



router.get('/login', function(req, res, next) {
//   res.render('login');
res.send("holaaaaa estoy en login(por ende no ingrese)")
});

router.get('/home', function(req, res, next) {
    //   res.render('login');
    res.send("estoy en home(por ende si engrese)")
    });
     


router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }));
 

module.exports = router;