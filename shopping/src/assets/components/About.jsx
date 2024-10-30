import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxQuote } from "react-icons/rx";

function About() {
  return (
    <div style={{ paddingTop: "160px" }}>
      <div
        className="bg-secondary bg-opacity-25 py-4 mb-5 text-start"
        style={{ paddingLeft: "8%" }}
      >
        <h4 className="fw-bold">About Us</h4>
        <p>
          Home{" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>{" "}
          <span className="text-secondary"> About Us</span>
        </p>
      </div>
      <Container className=" px-md-5 mt-5">
        <img src="/about-us.jpg" alt="about img" className="w-100" />
        <Row className="mt-5 text-start">
          <Col lg={4} md={6} className="my-2">
            <h4 className="fw-bold">Who We Are?</h4>
            <p className="pt-2 text-secondary">
              Contextual advertising programs sometimes have strict policies
              that need to be adhered to. Let’s take Google as an example.
            </p>
          </Col>
          <Col lg={4} md={6} className="my-2">
            <h4 className="fw-bold">What We Do?</h4>
            <p className="pt-2 text-secondary">
              In this digital generation where information can be easily
              obtained within seconds, business cards still have retained their
              importance.
            </p>
          </Col>
          <Col lg={4} md={12} className="my-2">
            <h4 className="fw-bold">Why Choose Us?</h4>
            <p className="pt-2 text-secondary">
              A two or three-story house is the ideal way to maximize the piece
              of earth on which our home sits, but for older or infirm people.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0 mt-5">
          <Col
            lg={6}
            className="d-flex flex-column align-items-center justify-content-center text-center py-4 bg-secondary bg-opacity-25"
          >
            <RxQuote className="mb-3 Quote" />
            <p className="w-75 mb-3 going" style={{ fontStyle: "italic" }}>
              “Going out after work? Take your butane curling iron with you to
              the office, heat it up, style your hair before you leave the
              office and you won’t have to make a trip back home.”
            </p>
            <div className="d-flex align-items-center">
              <img
                src="/testimonial-author.jpg"
                alt="testimonial author"
                className="rounded-circle me-3"
                style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h5 className="mb-1 fw-bold">Augusta Schultz</h5>
                <h5 className="text-secondary" style={{ fontStyle: "italic" }}>
                  Fashion Design
                </h5>
              </div>
            </div>
          </Col>
          <Col lg={6} className="m-0 p-0">
            <img
              src="/testimonial-pic.jpg"
              alt="testimonial"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
      <Container className=" px-md-5 mt-5">
        <Row>
          <Col className="d-flex">
            <div>
              1
            </div>
            <div>
              Our Users
            </div>
          </Col>
          <Col className="d-flex">
          <div>
              <h1>1</h1>
            </div>
            <div>
              Total Categories
            </div>
          </Col>
          <Col className="d-flex">
          <div>
              1
            </div>
            <div>
              In Country
            </div>
          </Col>
          <Col className="d-flex">
          <div>
              1
            </div>
            <div>
              Happy Customer
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="px-3 px-md-5 mt-5">
        <Row>
          <p style={{color:"#e53637"}} className="fw-bold">OUR TEAM</p>
          <h1 className="fw-bold pb-5">Meet Our Team</h1>
          <Col>
            <div>
                <img src="./team-1.jpg"/>
                <h4 className="fw-bold text-start ps-2 pt-4">John Smith</h4>
                <p className="text-start ps-2 text-secondary">Fashion Design</p>
            </div>
          </Col>
          <Col>
            <div>
                <img src="./team-2.jpg"/>
                <h4 className="fw-bold text-start ps-2 pt-4">Christine Wise</h4>
                <p className="text-start ps-2 text-secondary">C.E.O</p>
            </div>
          </Col>
          <Col>
            <div>
                <img src="./team-3.jpg"/>
                <h4 className="fw-bold text-start ps-2 pt-4">Sean Robbins</h4>
                <p className="text-start ps-2 text-secondary">Manager</p>
            </div>
          </Col>
          <Col>
            <div>
                <img src="./team-4.jpg"/>
                <h4 className="fw-bold text-start ps-2 pt-4">Lucy Myers</h4>
                <p className="text-start ps-2 text-secondary">Delivery</p>
            </div>
          </Col>
        </Row>
         
      </Container>
      <Container>
      <p style={{color:"#e53637"}} className="fw-bold">PARTNER</p>
      <h1 className="fw-bold pb-5">Happy Clients</h1>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      
        
      </Container>
    </div>
  );
}

export default About;
