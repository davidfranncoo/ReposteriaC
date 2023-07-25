import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./nav.css"

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <li>Tortas</li>
          <li>Postre</li>
          <li>Tartas</li>
          <li>Bandejas</li>
          <Link to="/carrito">
            <li>🛒</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
