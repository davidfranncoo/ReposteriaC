const { Router } = require('express');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.post("/User", async(req,res)=>{
    return res.send("todo ok")
})

module.exports = router;
