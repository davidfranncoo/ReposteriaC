const { Router } = require('express');
const axios= require("axios")
const getApiData=require("../../data/data") 
const {Product}= require("../db")



 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/product",async (req,res)=>{
  console.log("111111", Product)
   
    try {
        const data = await Product.findAll();
       
      
        res.send(data);
      } catch (error) {
      
        res.status(500).send("Error en el servidor");
      }
})

module.exports = router;
