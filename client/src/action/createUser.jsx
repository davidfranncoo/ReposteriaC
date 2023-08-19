import axios from "axios";



 async function createUser(payload){

    console.log("payload",payload)
    function handerAlert(props){

     
      if(props===200){
        alert("SE CREO EL USUARIO")
      }
      if(props===300){
        alert("EL CORREO YA EXISTE")
      }
    } 
   
   
   await axios.post("http://localhost:3001/singup",payload )
     .then((response)=>{
        const status=response.status
        handerAlert(status)
         
     })
     .catch((error)=>{
        const status= error.response.status
        //console.log("eeeroooor",error.response.status)
        handerAlert(status)
        
        
        
        }
     )

 }

 export default createUser;