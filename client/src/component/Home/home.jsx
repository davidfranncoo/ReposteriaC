import React from "react";
import Nav from "../Nav/nav"
import { Link } from "react-router-dom";

export default function Home(){


    return (
        <div>
            <Nav/>

            <header>CARRUCEL</header>

            <main>
                
              <div>card de tortas</div>
              <Link to="/productos">
                Ver mas
                </Link>
              <img src="" alt="imagen1"></img>  
              <img src="" alt="imagen1"></img>  
              <img src="" alt="imagen1"></img>  
              
              
            </main>
            <main>
            <div>card de Postres</div>    
            </main>
            <main>
            <div>card de Tartas</div>  
                </main>
                <div>card de Bandejas</div>  
         <footer>
            <h2>final</h2>
         </footer>
        </div>
    )
}