import React,{useState} from "react";
import createUser from "../../action/createUser";
import "./signin.css"
export default function SignUp(){


    const [datos,setDatos]=useState({
        name:"",
        email:"",
        password:""

    })

    function handlerSubmit(e){
        e.preventDefault()
        console.log("formulario",datos)
        createUser(datos)
        
    }
    function handlerInputEmail(e) {
        
    setDatos({...datos,email:e.target.value})
    
        
    }
    function handlerInputPassword(e) {
        
        setDatos({...datos,password:e.target.value})
        
            
        }
    function handlerInputName(e) {
        
            setDatos({...datos,name:e.target.value})
            
                
            }
    


    return (
        <div>
           
                <h1>Crear Usuario</h1>

            <form   onSubmit={(e)=>handlerSubmit(e)}>
            <label>Name<input 
                type="name"
                onChange={(e)=>handlerInputName(e)}
                ></input></label>

                <label>Correo<input 
                type="email"
                onChange={(e)=>handlerInputEmail(e)}
                ></input></label>

                <label>Contraseña<input 
                type="password"
                onChange={(e)=>handlerInputPassword(e)}
                ></input></label>

                <button type="submit">Sing Up</button>
                
            </form>
        </div>
    )
}