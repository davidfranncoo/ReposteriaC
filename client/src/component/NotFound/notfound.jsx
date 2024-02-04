import React from 'react';
import NavBar from "../Nav/nav";
import Footer from '../Footer/footer';
import './notfound.css';

export default function(){
  return (<>
    <NavBar/>
    <div className="not-found-container">

      <h1>404</h1>
      <p>¡Oops! Parece que te has perdido.</p>
      <p>Vuelve a la página principal haciendo clic <a href="/">aquí</a>.</p>
    </div>

    <Footer/>
  </>
  );
};

