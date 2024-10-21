import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='bg-dark text-light text-center p-5' style={{marginTop:"200px"}}>
      <Container>
      <Row>
        <Col>
          <div className='text-start ms-5 w-75'>
          <img src="/footer-logo.png" alt="Logo" />
          <p className='pt-4 pb-3'>The customer is at the heart of our unique business model, which includes design.</p>
          <img src='/payment.png'/>
          </div>
        </Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>

      </Row>
      </Container>
        <h5>All Right &copy; Copyright Reserved to @Ekata Jadhav</h5>
        
    </div>
  )
}

export default Footer