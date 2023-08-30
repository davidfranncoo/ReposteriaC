import React,{useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import loginUser from "../../action/loginUser"
import "./login.css"
export default function Login(){

    const [datos,setDatos]=useState({
        email:"",
        password:""

    })

    function handlerSubmit(e){
        e.preventDefault()
     
        loginUser(datos)
        
    }
    function handlerInputEmail(e) {
        
    setDatos({...datos,email:e.target.value})
    
        
    }
    function handlerInputPassword(e) {
        
        setDatos({...datos,password:e.target.value})
        
            
        }


    return (
        <div>
           
                <h1>Ingresa Sesion</h1>

            <form className="div_login"  onSubmit={(e)=>handlerSubmit(e)}>
                <label>Correo<input 
              
                onChange={(e)=>handlerInputEmail(e)}
                ></input></label>

                <label>Contraseña<input 
                type="password"
                onChange={(e)=>handlerInputPassword(e)}
                ></input></label>

                <button type="submit">Logu In</button>
                <Link to={"/singup"}>
                <button>Sign up</button>
                </Link>
            </form>
        </div>
    )
}