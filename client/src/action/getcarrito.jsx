import axios from "axios";

 async function GetCarrito(){

      const requeri= await axios.get("http://localhost:3001/carrito");
      const data=requeri.data
     
  
      return data

 }

 export default GetCarrito;
