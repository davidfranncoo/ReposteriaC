const { Router } = require('express');
const axios= require("axios")
const getApiData=require("../../data/data") 

 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/",async (req,res)=>{

    try {
        const data = await getApiData();
        res.send(data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
        res.status(500).send("Error en el servidor");
      }
})

module.exports = router;
