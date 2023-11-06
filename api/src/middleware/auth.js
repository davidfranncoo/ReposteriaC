const jwt = require("jsonwebtoken");


function authenticateToken(req,res,next){

    const authorization=req.get('authorization');

    if (!authorization) {
        return res.status(400).send("Faltan Datos de Autorizacion");
      }
    
      let token = "";
      if (authorization && authorization.toLowerCase().startsWith("bearer")) {
        token = authorization.substring(7);
      }
      let decodedToken = {};
      try {
        decodedToken = jwt.verify(token, "1234");
      } catch (error) {
        return res.status(402).send({ error: "error del token" });
      }
      console.log(
        "para ver si tiene algn elemento",
        Object.keys(decodedToken).length
      );
      if (token && Object.keys(decodedToken).length === 0) {
        //res.redirect(302, 'https://www.ejemplo.com');
        return res.status(302).send("ve a loguearte");
        // { redirect: "/login" }
      }
      req.user = decodedToken;
      next();
}

module.exports = authenticateToken;
