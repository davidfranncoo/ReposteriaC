import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./prueba.css";

import Carru2 from "../../Img/torta2.jpg";
import Carru3 from "../../Img/torta3.jpg";
import tortaPng from "../../Img/tortasinfondo.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

// .navbar-toggler-icon

export default function Prueba() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="baground_prueba container-fluid p-0">
      <div className="ultimo_momento">
        <h4 className=" text-center text-white ">
          Pedí tu torta a
          <br /> último momento
        </h4>
        <Button variant="info" size="sm" active>
          Aquí
        </Button>
      </div>
      <div className="custom-shape-divider-top-1700077761">
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

            <h6>
              ¡Elige los sabores que más te encanten y el diseño que haga única
              tu torta!,
            </h6>
          </Col>
          <Col className="col-3 text-center p-1">
            <span className="material-symbols-outlined">calendar_month</span>
            <h4>Agenda tu Pedido</h4>

            <h6>
              Anticípate y asegura tu pedido con tiempo. ¡Así puedes relajarte y
              disfrutar sin preocupaciones!
            </h6>
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
            <h4 className="text-center ">------- Tortas -------</h4>
          </Col>
          <Col className="col-1 ">
            <Link>ver</Link>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col className=" columna_producto d-flex flex-column align-items-center">
            <h6 className="text-center ">Torta Alta</h6>
            <Image className="w-100 h-50" src={Carru2} />

            <h4 className="">$100 </h4>
            <button className="button_compra">
              <h3>comprar</h3>
            </button>
          </Col>

          <Col className=" columna_producto d-flex flex-column align-items-center">
            <h6 className="text-center ">Torta Alta</h6>
            <Image className="w-100 h-50" src={Carru3} />

            <h4 className="">$100 </h4>
            <button className="button_compra">
              <h3>comprar</h3>
            </button>
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
            <h4 className="text-center ">------- Postres -------</h4>
          </Col>
          <Col className="col-1 ">
            <Link>ver</Link>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col>
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
            <h4 className="text-center ">Tortas</h4>
          </Col>
          <Col className="col-1 ">
            <Link>ver</Link>
          </Col>
        </Row>
      </div>

      <Container fluid>
        <Row cassName="cajaP">
          <Col>
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

      <br />

      <div class="custom-shape-divider-bottom-1700336914">
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
      <div className="footer bg-primary">
        <h6>copyritin| lode caleb</h6>
      </div>
    </div>
  );
}
