import axios from "axios";

 async function sendProduct(payload){
   
     await axios.post("http://localhost:3001/carrito",payload );
   
  return ("listoooooo")
    

 }

 export default sendProduct;

