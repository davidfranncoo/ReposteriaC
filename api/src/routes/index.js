const { Router } = require('express');
const axios= require("axios")
const getApiData=require("../../data/data") 
const {Product}= require("../db")



 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/",async (req,res)=>{
   
    try {
        const data = await getApiData();
        const aver=await  Product.findAll()
        console.log("aveeeeer",aver)
        res.send(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        res.status(500).send("Error en el servidor");
      }
})

module.exports = router;
