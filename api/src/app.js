const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');//? se encarga de entender los solocitudes HTTP
const routes = require('./routes/index.js');
const session = require('express-session');//! 
const authRouter = require('./routes/auth.js');
const authLogin=require("./routes/login.js")
var passport = require('passport');


require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  //!res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); esto es deploy
  res.header('Access-Control-Allow-Origin', '*'); // * para que culaquier url le pueda hacer peticion
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//?-------sesion-------------------
server.use(require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
server.use(passport.authenticate('session'));



 //! ingreso de cuenta
server.use('/', routes);
//server.use('/', authRouter);
server.use('/', authLogin);

// server.use(session(
//   {
//     name: 'sid',
//     secret:'secret', // Debería estar en un archivo de environment( para encriptar))
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//       maxAge: 1000 * 60 * 60 * 2 // Está en milisegundos --> 2hs
//     }
//   }
// ));

// console.log("hola",session)







// Maneja los errores.
server.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
