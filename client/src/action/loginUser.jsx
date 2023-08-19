import axios from "axios";

 async function loginUser(user){
    //!token y sesion 

   
    await axios.post("http://localhost:3001/login",user)
    .then((response)=>{
        const statuss=response.status
       console.log("todo bien",statuss)
         
     })
     .catch((error)=>{
        const statuss= error.response.data
        //console.log("eeeroooor",error.response.status)
        console.log(statuss)
        
        
        
        }
     )

      

 }

 export default loginUser;
