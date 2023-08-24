var express = require('express');

const {User} = require('../db');
const bcrypt=require("bcrypt")   
const { Router } = require("express");
const router = express();


router.post("/login",async(req,res)=>{
    const {username,password}=req.body
    const user = await User.findOne({
        username
    })
    const passwordCorrect= user===null?
    false
    : await bcrypt.compare(password,user.password)

    if(!passwordCorrect){
        return res.status(401).send({
            error:"usuario o passwor erroneo"
        })
    }

    return res.status(200).send({
        username:user.username

    })

})
module.exports = router;