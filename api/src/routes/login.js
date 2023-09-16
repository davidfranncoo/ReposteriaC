var express = require('express');
const jwt= require("jsonwebtoken")
const {User} = require('../db');
const bcrypt=require("bcrypt")   
const { Router } = require("express");
const router = express();


router.post("/login",async(req,res)=>{
    const {username,password}=req.body
  
    const user = await User.findOne({where: {username: username}})
  
    const passwordCorrect= user===null?
    []
    : await bcrypt.compare(password,user.password)
    if(!passwordCorrect){
        return res.status(401).send({
            error:"usuario o passwor erroneo"
        })
    }

    //creamos el token 

    const userFrotToken={
        username:user.username,
        id:user.id
    }

    //formamos el token, lo que esta en "" es lo que se debe poner en .env
    const token= jwt.sign(userFrotToken, "1234")



    return res.status(200).send({
        username:user.username,
        id:user.id,
        token

    })

})
module.exports = router;