import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./prueba.css";
import img1 from "../../Img/lodecaleb-white.png";
import Carru1 from "../../Img/torta1.jpg";
import Carru2 from "../../Img/torta2.jpg";
import Carru3 from "../../Img/torta3.jpg";
import tortaPng from "../../Img/tortasinfondo.png";
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
    <div className="baground_prueba container-fluid p-0">
      <Row className="bg-primary">
        <Col>
          <nav className="navbar bg-body-tertiary p-0 ">
            <div className="container-fluid p-0 bg-primary">
              <Row>
                <Col className="col-9">
                  <Image src={img1} className="imagen1" />
                </Col>
                <Col className="col-2 d-flex justify-content-around p-0">
                  <Navv.Link href="/">
                    <i className="bi bi-cart3"></i>
                  </Navv.Link>

                  <Navv.Link href="/login">
                    <i className="bi bi-person"></i>
                  </Navv.Link>

                  <button
                    className="navbar-toggler p-0 border-0 "
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                  >
                    <i class="bi bi-list-ul"></i>
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
      <div className="ultimo_momento">
        <h4 className=" text-center text-white ">
          Pedí tu torta a
          <br /> último momento
        </h4>
        <Button variant="info" size="sm" active>
          Aquí
        </Button>
      </div>
      <div class="custom-shape-divider-top-1700077761">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <img src={tortaPng} className="portaSinFondo"></img>

      <div className="miniaturas bg-info  mt-5">
        <Row className="d-flex justify-content-center">
          <Col className="col-3 text-center p-1">
          <span className="material-symbols-outlined ">
nest_clock_farsight_analog
</span>
            <h4>Pedidos Express</h4>
            <h6>
              Elige una de nuestras opciones, la personalizamos en 2 horas. 
              ¡Listo para recoger y celebrar!
            </h6>
          </Col>

          <Col className="col-3 text-center p-1">
            <span className="material-symbols-outlined">cake</span>
            <h4>Crea Tu Torta</h4>

            <h6 >¡Elige los sabores que más te encanten y el diseño que haga única tu torta!,</h6>
          </Col>
          <Col className="col-3 text-center p-1">
            <span className="material-symbols-outlined">calendar_month</span>
            <h4>Agenda tu Pedido</h4>

            <h6>
Anticípate y asegura tu pedido con tiempo. ¡Así puedes relajarte y disfrutar sin preocupaciones!</h6>
          </Col>
        </Row>
      </div>

      <div className="titulos_subtitulos mt-5">
        <Row>
          <Col className="col-12 d-flex ">
            <h1 className="text-center mx-auto">
              Explora nuestra variedad de productos
            </h1>
          </Col>
          <Col className="text-center mx-auto">
            <h3 className="text-sm text-primary">¡Sumamente deliciosos!</h3>
          </Col>
        </Row>
      </div>

      <div className="divProduct">
        <Row className="">
          <Col className="col-10 ">
            {" "}
            <h4 className="text-center ">Tortas</h4>
          </Col>
          <Col className="col-1 ">
            <Link >ver</Link>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col >
            <Image className="w-100 h-50" src={Carru2} />

            <h6 className="text-center ">aca va una reseña $100</h6>
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
      <div className="footer bg-primary">
        <h6>copyritin| lode caleb</h6>
      </div>
    </div>
  );
}
