import axios from "axios";

 async function GetData(){

      const requeri= await axios.get("http://localhost:3001/product");
      const data=requeri.data
  
      return data

 }

 export default GetData;






















// export async function DataProduct(){

//     try {
//         const response = await axios.get("http://localhost:3001/product")
//         const data=response.data
//         return data
        
//     } catch (error) {
//         return "error"
//     }
// }

