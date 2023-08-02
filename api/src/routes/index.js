const { Router } = require("express");
const axios = require("axios");
const getApiData = require("../../data/data");
const { Product, Carrito } = require("../db");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/product", async (req, res) => {
  console.log("111111", Product);

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
  console.log("idddddd",idProduct)
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

// ---------------------PORDUCTOS DEL CARRITO
router.post("/carrito", async (req, res) => {

  const {idname,descripcion,precio,texto}=req.body

  console.log("DATO",req.body)
 
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
