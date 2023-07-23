import axios from "axios";

 async function categoryProduct(category){
     

      const requeri= await axios.get("http://localhost:3001/product/" + category);
      const data=requeri.data
     console.log("111111",data)
      return data

 }

 export default categoryProduct;