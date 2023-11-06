const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { Product, Carrito, User, ProductCarrito } = require("../db");
const { getProduct, getProductByCategory } = require("../controllers/product");
const router = Router();
const bcrypt = require("bcrypt");
const authenticateToken = require("../middleware/auth");
const saltRounds = 10; // Número de rondas de sal para la encriptación

// -------------------USUARIO----------------------
router.post("/singup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (username && email && password) {
      const findEmail = await User.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (findEmail) {
        return res
          .status(409)
          .send({ error: "Ya existe un usuario con este email" });
      }
      const passwordHash = password;

      bcrypt.hash(passwordHash, saltRounds, function (err, hash) {
        if (err) {
          console.error("Error al generar el hash:", err);
        } else {
          // Aquí puedes almacenar el 'hash' en tu base de datos junto con otros datos del usuario
          console.log("Contraseña hasheada:", hash);
          User.create({
            username: username,
            email: email.toLowerCase(),
            password: hash,
          });
        }
      });

      // await User.create({
      //   username: username,
      //   email: email,
      //   password: password,
      // });

      return res.status(200).send({ msg: "Se agrego Usuario Correctamente" });
    }
    return res.status(400).send({ error: "Faltan Datos" });
  } catch (error) {
    return res.status(400).send({ error: "Erro al Crear Usuario" });
  }
});

router.get("/product", getProduct);
router.get("/product/:category", getProductByCategory);

//>>>>  Busco un producto por id y lo uso en el carrito, pero antes se corrobora que el usuario este registrado
router.get("/detail/:id", authenticateToken, async (req, res) => {
  // --------------------- autenticacion de ususario------

  const idProduct = req.params.id;

  //----------------------- si se encuentra use se muetra el producto-------------------

  try {
    const data = await Product.findAll({
      where: {
        id: idProduct,
      },
    });
    if (data.length === 0) {
      return res.status(403).send("no hay producto");
    }
    return res.send(data);
  } catch (error) {
    return res.status(500).send("No existe el producto");
  }
});

// ---------------------CARRITO-----------------------
//>>>>> aca agrego un producto al carrito
//!!>>>> autenticar usuario y agregue productos al carrito del usuario

router.post("/carrito", async (req, res) => {
  const { idname, descripcion, precio, texto } = req.body;
  /*PRIMERA PARTE : UTENTICACION
                  a)debo ver si estoy AUTORIZATION para poder crear el producto:
                      if---> paso a la creacion
                      else-> Redirijo ya que debo registrarme o loguearme 
                  */
  //!recprdar que esto ya esta en get("detail/:id")
  //--------------tokeeeen------------
  const authorization = req.get("authorization");
  let token = "";
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }
  let decodedToken = {};
  try {
    decodedToken = jwt.verify(token, "1234");
  } catch (error) {
    //return res.status(402).send({error:"error del token"})
  }

  console.log(
    "para ver si tiene algn elemento",
    Object.keys(decodedToken).length
  );
  if (token && Object.keys(decodedToken).length === 0) {
    //res.redirect(302, 'https://www.ejemplo.com');
    return res.status(302).send({ redirect: "/login" });
  }
  /*SEGUNDA PARTE: creo el proucto si toda va en marcha 
                       a) Desde el token debo obtener el username para poder guardarlo  
                        b) Tengo que guardar  el idname(producto) con el id del producto en cuestion
  */
  try {
    if (idname && precio && descripcion && texto) {
      const createCarrito = await Carrito.create({
        idname: idname,
        precio: precio,
        texto: texto,
        descripcion: descripcion,
      });

      const findUser = await User.findAll({
        where: {
          id: decodedToken.id,
        },
      });

      const findProduct = await Product.findAll({
        where: {
          id: idname,
        },
      });

      await createCarrito.addUsers(findUser);
      await createCarrito.addProducts(findProduct);

      return res.send("Se agrego la el producto");
    }
    return res.status(401).send("faltan datos");
  } catch (error) {
    return res.status(400).send("erro al agregar");
  }
});

//>>> aca busco todos los prodcto que tiene el ususario y le muestro en su carrito

//!>>>> me falta autenticar el ususario con el token y que busque sus productos  cuando ingrso al carrito

router.get("/carrito", async (req, res) => {
  //>>> autentico usuario para luego obtener todos los productos que tenga en el carrito dicho  user

  //-------------- Autenticaion de usuario-------------

  const authorization = req.get("authorization");

  let token = "";
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    token = authorization.substring(7);
  }
  let decodedToken = {};
  try {
    decodedToken = jwt.verify(token, "1234");
  } catch (error) {
    //return res.status(402).send({error:"error del token"})
  }

  console.log(
    "para ver si tiene algn elemento",
    Object.keys(decodedToken).length
  );
  if (token && Object.keys(decodedToken).length === 0) {
    //res.redirect(302, 'https://www.ejemplo.com');
    return res.status(302).send({ redirect: "/login" });
  }

  //--------- usuario autenticado aso a ostrar los proudctos que tengan, si es que tienen
  //---------- if( esto son los productos en carrito)
  //---------- else( este user no tiene prodcutos en carrito)

  try {
    /*
--------OBTENCION DE DATOS PARA MOSTRAR EN EL CARRITO SI ES Q HAY-------
>> el CARRITO/idname === USER/id

*/

    const data = await User.findAll({
      include: [
        {
          model: Carrito,
          include: [
            {
              model: Product,
            },
          ],
        },
      ],
    });

    // include: [
    //   {
    //     model: Product,
    //     attributes: ["img", "name"],
    //   },
    // ],
    // await data.map((e)=>{

    //   const y=e.CarritoId
    //   const z= Product.findAll()

    // })
    // const dataComplete=[]
    // await data.map((e)=>{
    //     const efimero=e
    //     const dentro=[]
    //     const exis= Product.findAll({where:[
    //       id=e.UserId
    //     ]})
    //     dentro.push(exis)

    // })

    if (!data) {
      return res.status(400).send("no hay data");
    }
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send("Error en el servidor");
  }
});

module.exports = router;
