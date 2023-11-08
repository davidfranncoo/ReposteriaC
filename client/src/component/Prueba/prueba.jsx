import React,{useState} from "react";
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
import Carousel from 'react-bootstrap/Carousel';

// .navbar-toggler-icon

export default function Prueba() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid">
      <Row className="bg-primary">
        <Col>
          <nav className="navbar bg-body-tertiary p-0 ">
            <div className="container-fluid p-0 bg-primary">
              <Row>
                <Col className="col-8">
                    <Image src={img1}  className="imagen1" />

                </Col>
                <Col className="col-4 d-flex justify-content-around p-0">

                  <Navv.Link href="/">
            <i className="bi bi-cart" ></i>

            </Navv.Link>
       
            <Navv.Link href="/login">

        <i className="bi bi-person-circle" ></i>
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
                  <Col >

                  
               
                <div className="offcanvas-header pb-0 pt-0">

                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <Image src={img1}  className="imagen1 p-0" />

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
    <Col >
    
    <Carousel className="carul" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item  >
       <div className="contenImg">
      <img src={Carru1}  className="imagenCarru" />
        </div> 
        

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="contenImg">
      <img src={Carru2}  className="imagenCarru" />
        </div> 

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="contenImg">
      <img src={Carru3}  className="imagenCarru" />
        </div> 

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</Col>



</Row>

<Row>
<Col className="col-6 bd-">Tortas</Col>
<Col className="col-6 bg-danger">botton</Col>
<Row>

<Col >1 2 3 4 </Col>
</Row>

</Row>













    </div>
  );
}

// {[false].map((expand) => (
//   <Navbar className="naav" key={expand} expand={expand} >
//     <Container>
//       <Navbar.Toggle
//       className="naavTogle"
//         aria-controls={`offcanvasNavbar-expand-${expand}`}
//       />

//       <Navbar.Offcanvas
//         id={`offcanvasNavbar-expand-${expand}`}
//         aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//         placement="end"
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title
//             id={`offcanvasNavbarLabel-expand-${expand}`}
//           >
//             Lode Caleb
//           </Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Navv className="justify-content-end flex-grow-1 pe-3">
//             <Navv.Link href="/home">Inicio</Navv.Link>
//             <Navv.Link href="/product/tortas">Tortas</Navv.Link>
//             <Navv.Link href="/product/postres">
//               Postre
//             </Navv.Link>
//             <Navv.Link href="/product/tartas">Tartas</Navv.Link>
//             <Navv.Link href="/product/bandejas">
//               Bandejas
//             </Navv.Link>
//           </Navv>
//         </Offcanvas.Body>
//       </Navbar.Offcanvas>
//     </Container>
//   </Navbar>

// ))}
