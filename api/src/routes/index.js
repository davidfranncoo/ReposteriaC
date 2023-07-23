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

router.get("/product/:category",async(req,res)=>{
  const category=req.params.category;
  try {
    const data= await Product.findAll({
      where:{
        category:category
      }
    })
   if(data.length===0){
    return res.send("no hay categoria ")
   }
    return res.send(data);
    
  } catch (error) {
    return res.status(500).send("No existe esta categoria");
  }
  

})
module.exports = router;
