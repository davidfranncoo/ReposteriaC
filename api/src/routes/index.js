const { Router } = require("express");
const getApiData = require("../../data/data");
const { Product, Carrito, User } = require("../db");
//const cookieparser = require("cookie-parser"); //! interprete, se encarga de leer las cookies que nos estan enviando
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const router = Router();


// -------------------SESION DE TOKEN----------------
// router.use(require('express-session')({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false
// }));

// router.use(passport.initialize());
// router.use(passport.session()); 

// passport.use(new LocalStrategy(
//   function(email, password, done) {
//     console.log("Intento de inicio de sesión para el email:", email);
//     User.findOne({ email: email }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (user.password != password) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));
  



// passport.deserializeUser(function(id, done) {
//   User.findOne({where:{
//     id:id
//   }})
//   .then((user) => {
//     done(null, user);
//       })
//       .catch(err => {
//         return done(err); 
//       })
//     });
    
//     passport.serializeUser(function(user, done) {
//       console.log("serilizacioooooon", user)
//       done(null, user.id);
//     });
 
//   router.use((req, res, next) => {
   
//     next();
//   });
  
// function isAuthenticated(req, res, next) {
//   if(req.isAuthenticated()) {
//     next();
//   } else {
//     res.redirect('/login');
//   }
// }

// router.post('/login', 
//   passport.authenticate('local', {
//     failureRedirect: '/login' // Redirige a la página de inicio de sesión en caso de error
//    // Mensaje de error flash
//   }),
//   function(req, res) {
//     res.redirect('/');
//   });

// -------------------USUARIO----------------------



router.post("/singup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (username && email && password) {
      const findEmail = await User.findOne({
        where: {
          email: email,
        },
      });

      if (findEmail) {
        return res.status(300).send("ya hay un usuario con este email");
      }
      await User.create({
        username: username,
        email: email,
        password: password,
      });

      return res.status(200).send("se creo el usuario");
    }
    return res.status(401).send("faltan datos");
  } catch (error) {
    return res.status(400).send("erro al agregar");
  }
});
 
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

    
//     const seachUser=await User.findOne({
//       where: {
//         email:email,
//       }}
//     )
//     console.log("useeeer",seachUser)
//     if(seachUser===null){
//       return res.status(302).send("El Email no esta registrado")
//     }
//     if(seachUser!==null && seachUser.password!==password) {
//      return  res.status(301).send("El Password es incorrecto")
      
//     }
    
//     // Simulamos un inicio de sesión exitoso.
//     return res.status(200).send("Inicio de sesión exitoso");
//   } catch (error) {

//     return res.status(401).send("Se produjo un error");
//   }

// });











// --------------PRODUCTO----------------------

router.get("/product", async (req, res) => {
  try {
    const data = await Product.findAll();
    

    res.send(data);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

router.get("/product/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const data = await Product.findAll({
      where: {
        category: category,
      },
    });
    if (data.length === 0) {
      return res.send("no hay categoria ");
    }
    return res.send(data);
  } catch (error) {
    return res.status(500).send("No existe esta categoria");
  }
});

router.get("/detail/:id", async (req, res) => {
  const idProduct = req.params.id;

  try {
    const data = await Product.findAll({
      where: {
        id: idProduct,
      },
    });
    if (data.length === 0) { 
      return res.send("no hay producto");
    }
    return res.send(data);
  } catch (error) {
    return res.status(500).send("No existe el producto");
  }
});

// ---------------------CARRITO-----------------------

router.post("/carrito", async (req, res) => {
  const { idname, descripcion, precio, texto } = req.body;

  try {
    if (idname && precio && descripcion && texto) {
      const createCarrito = await Carrito.create({
        idname: idname,
        precio: precio,
        texto: texto,
        descripcion: descripcion,
      });

      const findProduct = await Product.findAll({
        where: {
          id: idname,
        },
      });
      await createCarrito.addProducts(findProduct);
      return res.send("se agrego la el pregucto");
    }
    return res.status(401).send("faltan datos");
  } catch (error) {
    return res.status(400).send("erro al agregar");
  }
});

router.get("/carrito", async (req, res) => {
  try {
    const data = await Carrito.findAll({
      include: [
        {
          model: Product,
          attributes: ["img", "name"],
        },
      ],
    });

    res.send(data);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
});

module.exports = router;
