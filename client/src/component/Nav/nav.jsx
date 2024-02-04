import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import img1 from "../../Img/lodecaleb-white.png";
import { Image, Container, Navbar, Offcanvas, Nav } from "react-bootstrap";

import ButtonLogin from "../ButtonLogin/buttonLogin.jsx";

export default function NavBar() {
  const [desplegable, setDesplegable] = useState(false);

  function hanlerDesplegableLogin() {
    if (desplegable === true) {
      return setDesplegable(false);
    }
    if (desplegable === false) {
      setDesplegable(true);
    }
  }
  return (
    <div className=" relative-example">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-primary ">
          <Container fluid>
            <div className="d-flex">
              <Navbar.Brand href="/home">
                {" "}
                <Image src={img1} className="imagen1 p-0" />
              </Navbar.Brand>
              <Link
                className="navbar-toggler collapsed d-flex align-items-center"
                to="/carrito"
              >
                <i className="bi bi-cart3"></i>
              </Link>
              <button
                className="navbar-toggler collapsed"
                onClick={hanlerDesplegableLogin}
              >
                <i className="bi bi-person"></i>
              </button>

              {desplegable === true ? <ButtonLogin /> : null}

              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                <i className="bi bi-list-ul"></i>
              </Navbar.Toggle>
            </div>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="bg-primary">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src={img1} className="imagen2 p-0" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="body_nav">
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Link className=" d-flex text-decoration-none" to="/home">
                    <span className="p-1 text-primary material-symbols-outlined">
                      home
                    </span>
                    <h4>Home</h4>
                  </Link>
                  <Link
                    className="d-flex text-decoration-none"
                    to="/products/tortas"
                  >
                    {" "}
                    <span className="p-1 text-primary material-symbols-outlined">
                      cake
                    </span>
                    <h4>Tortas</h4>
                  </Link>
                  <Link
                    className=" d-flex text-decoration-none"
                    to="/products/postres"
                  >
                    {" "}
                    <span className="p-1 text-primary material-symbols-outlined">
                      icecream{" "}
                    </span>
                    <h4>Postres</h4>
                  </Link>
                  <Link
                    className="d-flex text-decoration-none"
                    to="/products/tartas"
                  >
                    {" "}
                    <span className="p-1 text-primary material-symbols-outlined">
                      cookie
                    </span>
                    <h4>Tartas</h4>
                  </Link>
                  <Link
                    className="d-flex text-decoration-none"
                    to="/poroducts/bandejas"
                  >
                    <span className="p-1 text-primary material-symbols-outlined">
                      bakery_dining
                    </span>{" "}
                    <h4>Bandejas</h4>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
