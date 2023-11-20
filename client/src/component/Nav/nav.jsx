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
    <div>
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
    </div>
  );
}
