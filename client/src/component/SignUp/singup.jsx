import React,{useState} from "react";
import createUser from "../../action/createUser";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// or less ideally



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
           

            <Form   onSubmit={(e)=>handlerSubmit(e)}>
                <Container>
                <h1>Crear Usuario</h1>

            <Form.Label>Nombre
                </Form.Label>
                <Form.Control 
                type="username"
                value={datos.username}
                
                onChange={(e)=>handlerInputName(e)}
                ></Form.Control>

                <Form.Label>Correo
                    </Form.Label>
                    <Form.Control 
                type="email"
                value={datos.email}

                onChange={(e)=>handlerInputEmail(e)}
                ></Form.Control>

                <Form.Label>Contraseña
                    </Form.Label>
                    <Form.Control 
                type="password"
                value={datos.password}
                onChange={(e)=>handlerInputPassword(e)}
                ></Form.Control>

                <Button type="submit" size="sm">Crear Usuario</Button>{' '}
               
            <Link to={"/login"}>
                <Button size="sm" >Ingresar</Button>
            </Link>
                </Container>
            </Form>
        </div>
    )
}