import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Inicio(){



    return(
        <div>
        
            <h1>Bienvenido la pagina de tortas</h1>
        <Link to={"/login"}>
        <button>log in </button>
        </Link>
        <br/>       
        <Link>
        <button>Sing Up</button>
        </Link>
        </div>
    )
}