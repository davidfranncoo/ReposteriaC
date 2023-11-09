import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./prueba.css";
import img1 from "../../Img/logo4.png";
import Carru1 from "../../Img/torta1.jpg";
import Carru2 from "../../Img/torta2.jpg";
import Carru3 from "../../Img/torta3.jpg";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navv from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

// .navbar-toggler-icon

export default function Prueba() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid p-0">
      <Row className="bg-primary">
        <Col>
          <nav className="navbar bg-body-tertiary p-0 ">
            <div className="container-fluid p-0 bg-primary">
              <Row>
                <Col className="col-8">
                  <Image src={img1} className="imagen1" />
                </Col>
                <Col className="col-4 d-flex justify-content-around p-0">
                  <Navv.Link href="/">
                    <i className="bi bi-cart"></i>
                  </Navv.Link>

                  <Navv.Link href="/login">
                    <i className="bi bi-person-circle"></i>
                  </Navv.Link>

                  <button
                    className="navbar-toggler p-0 border-0 "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </Col>
              </Row>

              <div
                className="offcanvas offcanvas-end bg-info"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <Row>
                  <Col>
                    <div className="offcanvas-header pb-0 pt-0">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        <Image src={img1} className="imagen1 p-0" />
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="offcanvas-body">
                      <div>
                        <Link to="/home" className="link-style">
                          Inicio
                        </Link>
                      </div>
                      <div>
                        <Link to="/product/tortas" className="link-style">
                          Tortas
                        </Link>
                      </div>
                      <div>
                        <Link to="/product/postres" className="link-style">
                          Postres
                        </Link>
                      </div>
                      <div>
                        <Link to="/product/tartas" className="link-style">
                          Tartas
                        </Link>
                      </div>
                      <div>
                        <Link to="/product/bandejas" className="link-style">
                          Bandejas
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </nav>
        </Col>
      </Row>

      <Row className="bg-secondary">
        <Col>
          <Carousel
            className="carul"
            activeIndex={index}
            onSelect={handleSelect}
          >
            <Carousel.Item>
              <div className="contenImg">
                <img src={Carru1} className="imagenCarru" />
              </div>

              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="contenImg">
                <img src={Carru2} className="imagenCarru" />
              </div>

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="contenImg">
                <img src={Carru3} className="imagenCarru" />
              </div>

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <div className="custom-shape-divider-top-1699454754">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div>
        <Row>
          <Col className="col-12 d-flex ">
            <div>
              <h1 className="text-center mx-auto">
                Nuestra variedad de productos
              </h1>
            </div>
          </Col>
          <Col className="text-center mx-auto">
            <h3>Solo nosotros contamos con productos diversos</h3>
          </Col>
        </Row>
      </div>

      <div className="divProduct">
        <Row className="">
          <Col className="col-10 ">
            {" "}
            <h1>Tortas</h1>
          </Col>
          <Col className="col-1 ">
            <Button variant="primary">ver</Button>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col>
            <Image className="w-100 h-50" src={Carru2} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3 ">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3  ">
            <Image className="w-100 h-50" src={Carru2} />
           
             
              <h6 className="text-center mx-auto">aca va una reseña $100</h6>
           
          </Col>
          <Col className="col-3">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
        </Row>
      </Container>

     
      <div className="divProduct">
        <Row className="">
          <Col className="col-10 ">
            {" "}
            <h1>Postres</h1>
          </Col>
          <Col className="col-1 ">
            <Button variant="primary">ver</Button>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col>
            <Image className="w-100 h-50" src={Carru2} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3 ">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3  ">
            <Image className="w-100 h-50" src={Carru2} />
           
             
              <h6 className="text-center mx-auto">aca va una reseña $100</h6>
           
          </Col>
          <Col className="col-3">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
        </Row>
      </Container>
     
      <div className="divProduct">
        <Row className="">
          <Col className="col-10 ">
            {" "}
            <h1>Tartas</h1>
          </Col>
          <Col className="col-1 ">
            <Button variant="primary">ver</Button>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col>
            <Image className="w-100 h-50" src={Carru2} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3 ">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3  ">
            <Image className="w-100 h-50" src={Carru2} />
           
             
              <h6 className="text-center mx-auto">aca va una reseña $100</h6>
           
          </Col>
          <Col className="col-3">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
        </Row>
      </Container>
      
      <div className="divProduct">
        <Row className="">
          <Col className="col-10 ">
            {" "}
            <h1>Bandejas</h1>
          </Col>
          <Col className="col-1 ">
            <Button variant="primary">ver</Button>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col>
            <Image className="w-100 h-50" src={Carru2} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3 ">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
          <Col className="col-3  ">
            <Image className="w-100 h-50" src={Carru2} />
           
             
              <h6 className="text-center mx-auto">aca va una reseña $100</h6>
           
          </Col>
          <Col className="col-3">
            <Image className="w-100 h-50" src={Carru3} />

            <h6 className="text-center mx-auto">aca va una reseña $100</h6>
          </Col>
        </Row>
      </Container>

      <br />
      <div className="footer">
        <h6>copyritin| lode caleb</h6>
      </div>
    </div>
  );
}
