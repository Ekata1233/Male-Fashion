import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";

function Collections() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Container fluid className="position-relative collection">
        <Row className="">
          <Col sm={12} md={12} lg={7}>
            <div className="banner1-text ">
              <h1 className="fw-bold">Clothing Collection 2024</h1>
              <p className="banner-p">SHOP NOW</p>
            </div>
            <div className="d-flex flex-row-reverse  ">
              <img src="/banner11.jpg" alt="" className="banner1 " />
            </div>
          </Col>
        </Row>
        <Container fluid>
          <Row className="banner2-row   ps-3 position-relative">
            <Col md={12} lg={5} className="banner2-col">
              <div className="">
                <img src="/banner22.jpg" alt="" className="banner2" />
              </div>
              <div className="banner2-text text-start ">
                <h1 className="fw-bold">Accessories</h1>
                <p className="banner-p">SHOP NOW</p>
              </div>
            </Col>

            <Col  md={12} lg={7} className="banner3-col text-start">
              <div className="banner3-text">
                <h1 className="fw-bold">Shoes Spring 2024</h1>
                <p className="banner-p">SHOP NOW</p>
              </div>
              <div className="d-flex flex-row-reverse ">
                <img src="/banner33.jpg" alt="" className="banner3" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Collections;
