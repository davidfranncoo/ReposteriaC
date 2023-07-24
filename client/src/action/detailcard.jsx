import axios from "axios";

 async function GetDetail(id){
    
      const requeri= await axios.get("http://localhost:3001/detail/"+ id);
      const data=requeri.data
  
      return data

 }

 export default GetDetail;

