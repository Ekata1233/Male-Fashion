import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Blog() {
  return (
    <div  className="blog-div-main">
      <div className="bg-div1 py-5" style={{ position: "relative" }}>
        <Container className="my-5 pb-5">
          <div className="pb-5">
            <h1 className="fw-bold w-75 m-auto blog-h1 py-4 text-center pt-sm-5">
              Are you one of the thousands of iPhone owners who has no idea
            </h1>
            <div className="blog-div1 text-center">
              <span className="pe-2">By Deercreative</span> |
              <span className="px-2">February 21, 2019</span> |
              <span className="ps-2">8 Comments</span>
            </div>
          </div>
        </Container>
      </div>
      <Container>
      <div
        className="blog-Img pt-5 mt-5"
        style={{ position: "relative", top: "-10%" }}
      >
        <Container className="d-flex justify-content-center">
          <img src="./blog-details.jpg" alt="Blog Details" className="responsive-img " />
        </Container>
      </div>
      </Container>
      <Container>
        <Row>
        <Col lg={2} className="bg-primary d-flex flex-column align-items-center">
  <h3 className="d-flex justify-content-center">SHARE</h3>
  <div className="d-flex justify-content-center">
    <FaFacebookF />
  </div>
  <div className="d-flex justify-content-center">
    <FaTwitter />
  </div>
  <div className="d-flex justify-content-center">
    <FaYoutube />
  </div>
  <div className="d-flex justify-content-center">
    <FaLinkedinIn />
  </div>
</Col>

          <Col lg={10}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blog;
