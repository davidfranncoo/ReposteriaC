import axios from "axios";

 async function sendProduct(payload){
    console.log ("55555555",payload)
     await axios.post("http://localhost:3001/carrito",payload );
   
  return ("listoooooo")
    

 }

 export default sendProduct;

