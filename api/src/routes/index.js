const { Router } = require("express");


const axios = require("axios");
const getApiData = require("../../data/data");
const { Product, Carrito, User } = require("../db");
const cookieparser = require('cookie-parser');//! interprete, se encarga de leer las cookies que nos estan enviando
const session = require('express-session');//! 


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();



// -------------------sesion----------------
router.use(session(
  {
    name: 'sid',
    secret:'secret', // Debería estar en un archivo de environment( para encriptar))
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge: 1000 * 60 * 60 * 2 // Está en milisegundos --> 2hs
    }
  }
));


router.use((req, res, next) => {
 
 next();
});

const redirectLogin = (req, res, next) => {

  //! verificar que este y si no est redirige a login
  if(!req.session.userId) {


    res.redirect('/login');
  } else {
    next();
  }
}
const redirectHome = (req, res, next) => {
  if(req.session.userId) {
   
    res.redirect('/home');
  } else {
    next();
  }
}
router.get('/', (req, res) => {
  const { userId } = req.session;

  // res.send(`
  //   <h1>Bienvenidos a Henry!</h1>
  //   ${userId ? `
  //     <a href='/home'>Perfil</a>
  //     <form method='post' action='/logout'>
  //       <button>Salir</button>
  //     </form>
  //     ` : `
  //     <a href='/login'>Ingresar</a>
  //     <a href='/register'>Registrarse</a>
  //     `}
  // `)

  res.send("se guardo el userid si es que hay")
});


// ---------------USUARIO----------------------

router.post("/singup", async (req, res) => {

  const {name,email,password}=req.body
  try {
    
    if(name&&email&&password){
      
      const findEmail= await User.findOne({
        where:{
          email:email
        }
      })
     

      if(findEmail){
        return res.status(300).send("ya hay un usuario con este email")

      }
      await User.create({
        name:name,
        email:email,
        password:password,
      
      })
 
    

      return res.status(200 ).send("se creo el usuario")

    }
    return res.status(401).send("faltan datos")
  } catch (error) {
    return res.status(400).send("erro al agregar")
  }
})









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

  const {idname,descripcion,precio,texto}=req.body

 
  try {
    if(idname&&precio&&descripcion&&texto){

      const createCarrito= await Carrito.create({
        idname:idname,
        precio:precio,
        texto:texto,
        descripcion:descripcion,
      })

      const findProduct= await Product.findAll({
        where:{
            id:idname
        }
})
await createCarrito.addProducts(findProduct)
      return res.send("se agrego la el pregucto")

    }
    return res.status(401).send("faltan datos")
  } catch (error) {
    return res.status(400).send("erro al agregar")
  }
})
 

router.get("/carrito", async (req, res) => {



  try {
    const data = await Carrito.findAll( { include: [
      {
        model: Product,
        attributes: ["img", "name"],
      },
    ],});

    res.send(data);
  } catch (error) {
    res.status(500).send("Error en el servidor");
  }
})

module.exports = router;
