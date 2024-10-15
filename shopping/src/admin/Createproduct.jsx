import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminMenu from '../assets/components/AdminMenu'
function Createproduct() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                <AdminMenu/>
                </Col>

                <Col md={9}>
                <h1>Create Product</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Createproduct