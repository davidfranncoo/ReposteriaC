import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Nav() {
  return (
    <div>
      <nav>
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
