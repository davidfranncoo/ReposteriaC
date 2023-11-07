import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./prueba.css";
import img1 from "../../Img/logo1.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navv from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// .navbar-toggler-icon

export default function Prueba() {
  return (
    <div>
      <div className="container bg-secondary">
        <Row>
          <Col className="col-8">logo</Col>

          <Col className="col-4 bg-info">
            <Row>
              <Col className="col">
                <Navv.Link href="/">
                  <i className="bi bi-cart"></i>
                </Navv.Link>
              </Col>
              <Col className="col">
                <Navv.Link href="/login">
                  <i className="bi bi-person-circle"></i>
                </Navv.Link>
              </Col>
              <Col className="col">


                {[false].map((expand) => (
                  <Navbar className="naav" key={expand} expand={expand} >
                    <Container>
                      <Navbar.Toggle
                      className="naavTogle"
                        aria-controls={`offcanvasNavbar-expand-${expand}`}
                      />

                      <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                      >
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title
                            id={`offcanvasNavbarLabel-expand-${expand}`}
                          >
                            Lode Caleb
                          </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                          <Navv className="justify-content-end flex-grow-1 pe-3">
                            <Navv.Link href="/home">Inicio</Navv.Link>
                            <Navv.Link href="/product/tortas">Tortas</Navv.Link>
                            <Navv.Link href="/product/postres">
                              Postre
                            </Navv.Link>
                            <Navv.Link href="/product/tartas">Tartas</Navv.Link>
                            <Navv.Link href="/product/bandejas">
                              Bandejas
                            </Navv.Link>
                          </Navv>
                        </Offcanvas.Body>
                      </Navbar.Offcanvas>
                    </Container>
                  </Navbar>


                ))}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="col-9 bg-warning">
            <h1>Usa una pila de fuentes nativas </h1>
            <h2 className="desciption">
              que seleccione el mejor font-family para cada sistema operativo y
              dispositivo. Para una escala de tipografía más inclusiva y
              accesible, utilizamos la raíz predeterminada del navegador Usa
              $body-bg para establecer un background-color en el (#fff por
              defecto). Estos estilos se pueden encontrar dentro de
              _reboot.scss, y las variables globales están definidas en
              _variables.scss. Asegúrate de configurar $font-size-base en rem.
            </h2>
          </Col>

          <Col className="col-3 bg-primary">contenido3</Col>
        </Row>
      </div>
    </div>
  );
}
