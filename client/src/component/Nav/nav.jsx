import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./nav.css";
import img1 from "../../Img/lodecaleb-white.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Navv from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// .navbar-toggler-icon

export default function Nav() {
  return (
    <div className="fixed-top fixed-end bg-light position-relative">
      <Row className="bg-primary ">
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
                    <i className="bi bi-list-ul"></i>
                  </button>
                </Col>
              </Row>

              <div
                className=" divClosed offcanvas offcanvas-end "
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
                        className="boton-closed"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      >
                        <span className="text-white material-symbols-outlined ">
                          close
                        </span>
                      </button>
                    </div>

                    <div className=" offcanvas-body">
                      <div>
                        <Link to="/" className="d-flex link-style">
                          <span className="p-1 text-white material-symbols-outlined">
                            home
                          </span>{" "}
                          <h5 className=" p-1 text-white">Inicio</h5>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/products/tortas"
                          className=" link-style d-flex"
                        >
                          <span className="p-1 text-white material-symbols-outlined">
                            cake
                          </span>
                          <h5 className="p-1 text-white">Tortas</h5>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/products/postres"
                          className=" d-flex link-style"
                        >
                          <span className="p-1 text-white material-symbols-outlined">
                            icecream
                          </span>
                          <h5 className="p-1 text-white">Postres</h5>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/products/tartas"
                          className="d-flex link-style"
                        >
                          <span className="p-1 text-white material-symbols-outlined">
                            cookie
                          </span>
                          <h5 className="p-1 text-white">Tartas</h5>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/products/bandejas "
                          className="d-flex link-style"
                        >
                          <span className="p-1 text-white material-symbols-outlined">
                            bakery_dining
                          </span>
                          <h5 className="p-1 text-white">Bandejas</h5>
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
    </div>
  );
}
