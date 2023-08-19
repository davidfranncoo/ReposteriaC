import React,{useState} from "react";
import createUser from "../../action/createUser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import "./signin.css"
export default function SignUp(){


    const [datos,setDatos]=useState({
        username:"",
        email:"",
        password:""

    })

    function handlerSubmit(e){
        e.preventDefault()
        console.log("formulario",datos)
        createUser(datos)
        setDatos({
            username:"",
            email:"",
            password:""
        })
        
    }
    function handlerInputEmail(e) {
        
    setDatos({...datos,email:e.target.value})
    
        
    }
    function handlerInputPassword(e) {
        
        setDatos({...datos,password:e.target.value})  
        }
    function handlerInputName(e) {
            setDatos({...datos,username:e.target.value})
            
                
            }
    


    return (
        <div>
           
                <h1>Crear Usuario</h1>

            <form   onSubmit={(e)=>handlerSubmit(e)}>
            <label>Name<input 
                type="username"
                value={datos.username}

                onChange={(e)=>handlerInputName(e)}
                ></input></label>

                <label>Correo<input 
                type="email"
                value={datos.email}

                onChange={(e)=>handlerInputEmail(e)}
                ></input></label>

                <label>Contraseña<input 
                type="password"
                value={datos.password}
                onChange={(e)=>handlerInputPassword(e)}
                ></input></label>

                <button type="submit">Crear Usuario</button>
                
            </form>
            <Link to={"/login"}>
                <button >Log in</button>
            </Link>
        </div>
    )
}