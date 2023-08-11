import axios from "axios";



 async function createUser(payload){


    function alertError(){
        alert ("el correo ya existe")
    } 
   
   await axios.post("http://localhost:3001/singup",payload )
     .then(res=>{
        console.log("response")
     })
     .catch(error=>{
         console.log("error",error.response.status)
         alertError()
        
        }
     )

 }

 export default createUser;