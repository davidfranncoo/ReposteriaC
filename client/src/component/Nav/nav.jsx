import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Agrupando múltiples imports de react-router-dom
import "./nav.css";
import img1 from "../../Img/lodecaleb-white.png";
import { Image, Container, Navbar, Button, Offcanvas, Nav } from "react-bootstrap"; // Agrupando múltiples imports de react-bootstrap
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../action";
import ButtonLogin from "../ButtonLogin/buttonLogin.jsx";

export default function NavBar() {
  const dispatch = useDispatch();

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
              <Link className="navbar-toggler collapsed" to="/carrito">
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
                  <Image src={img1} className="imagen1 p-0" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/home">Home</Link>
                  <Link to="/products/tortas">Tortas</Link>
                  <Link to="/products/postres">Postres</Link>
                  <Link to="/products/tartas">Tartas</Link>
                  <Link to="/poroducts/bandejas">Bandejas</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

// <Row className="bg-primary ">
//   <Col>
//     <Nav className="navbar bg-body-tertiary p-0  fixed-top">
//       <div className="container-fluid p-0 bg-primary">
//         <Row>
//           <Col className="col-9">
//             <Image src={img1} className="imagen1" />
//           </Col>
//           <Col className="col-2 d-flex justify-content-around p-0">
//             <Link href="/">
//               <i className="bi bi-cart3"></i>
//             </Link>

//             <Link href="/login">
//               <i className="bi bi-person"></i>
//             </Link>

//             <button
//               className="navbar-toggler p-0 border-0 "
//               type="button"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#offcanvasNavbar"
//               aria-controls="offcanvasNavbar"
//               aria-label="Toggle navigation"
//             >
//               <i className="bi bi-list-ul"></i>
//             </button>
//           </Col>
//         </Row>

//         <div
//           className=" divClosed offcanvas offcanvas-end "
//           tabIndex="-1"
//           id="offcanvasNavbar"
//           aria-labelledby="offcanvasNavbarLabel"
//         >
//           <Row>
//             <Col>
//               <div className="offcanvas-header pb-0 pt-0">
//                 <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//                   <Image src={img1} className="imagen1 p-0" />
//                 </h5>
//                 <button
//                   type="button"
//                   className="boton-closed"
//                   data-bs-dismiss="offcanvas"
//                   aria-label="Close"
//                 >
//                   <span className="text-white material-symbols-outlined ">
//                     close
//                   </span>
//                 </button>
//               </div>

//               <div className=" offcanvas-body">
//                 <div>

//                   <Link to="/" className="d-flex link-style">
//                     <span className="p-1 text-white material-symbols-outlined">
//                       home
//                     </span>{" "}
//                     <h5 className=" p-1 text-white">Inicio</h5>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/products/tortas"
//                     className=" link-style d-flex"
//                   >
//                     <span className="p-1 text-white material-symbols-outlined">
//                       cake
//                     </span>
//                     <h5 className="p-1 text-white">Tortas</h5>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/products/postres"
//                     className=" d-flex link-style"
//                   >
//                     <span className="p-1 text-white material-symbols-outlined">
//                       icecream
//                     </span>
//                     <h5 className="p-1 text-white">Postres</h5>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/products/tartas"
//                     className="d-flex link-style"
//                   >
//                     <span className="p-1 text-white material-symbols-outlined">
//                       cookie
//                     </span>
//                     <h5 className="p-1 text-white">Tartas</h5>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/products/bandejas "
//                     className="d-flex link-style"
//                   >
//                     <span className="p-1 text-white material-symbols-outlined">
//                       bakery_dining
//                     </span>
//                     <h5 className="p-1 text-white">Bandejas</h5>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </div>
//     </Nav>
//   </Col>
// </Row>
