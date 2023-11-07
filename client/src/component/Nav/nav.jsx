import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./nav.css";
import img1 from "../../Img/logo1.png";
import Image from 'react-bootstrap/Image';
import Container from "react-bootstrap/Container";
import Navv from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// .navbar-toggler-icon

export default function Nav() {
  return (
    <div >
     
     
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav1">
          <Container fluid>
            <Row className="altura">
        <Col>
            <Navbar.Brand href="#"><Image src={img1}  className="w-25" /></Navbar.Brand>
        </Col>
     
        <Col className="d-flex justify-content-between w-25" >
            <Navv.Link href="/">
            <i className="bi bi-cart" ></i>

            </Navv.Link>
       
            <Navv.Link href="/login">

        <i className="bi bi-person-circle" ></i>
            </Navv.Link>
       

            <Navbar.Toggle className="w-25" aria-controls={`offcanvasNavbar-expand-${expand}`} />
        </Col>
      
      </Row>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Lode Caleb
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Navv className="justify-content-end flex-grow-1 pe-3">
                  <Navv.Link href="/home">Inicio</Navv.Link>
                  <Navv.Link href="/product/tortas">Tortas</Navv.Link>
                  <Navv.Link href="/product/postres">Postre</Navv.Link>
                  <Navv.Link href="/product/tartas">Tartas</Navv.Link>
                  <Navv.Link href="/product/bandejas">Bandejas</Navv.Link>
                </Navv>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
    </div>
  );
}
