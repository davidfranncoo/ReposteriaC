var express = require('express');
const jwt= require("jsonwebtoken")
const {User} = require('../db');
const bcrypt=require("bcrypt") 
require('dotenv').config(); 
const {
    SECRET_KEY
  } = process.env; 

const router = express();


router.post("/login",async(req,res)=>{
    const {email,password}=req.body
  
    const user = await User.findOne({where: {email: email.toLowerCase()}})
    console.log("este es el useeer",user)
    if(user===null){
        return res.status(400).send("error no se encontro user")
    }
    const passwordCorrect= user===null?
    []
    : await bcrypt.compare(password,user.password)
    if(!passwordCorrect){
        return res.status(401).send({error:"usuario o password erroneo"
        })
    }
    //creamos el token 

    const userFrotToken={
        username:user.username, 
        id:user.id
    }

    //formamos el token, lo que esta en "" es lo que se debe poner en .env
    const token= jwt.sign(userFrotToken, SECRET_KEY)

   

    return res.status(200).send({
        username:user.username,
        id:user.id,
        token

    })

})
module.exports = router;