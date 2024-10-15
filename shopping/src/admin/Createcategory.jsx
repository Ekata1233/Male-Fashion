import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminMenu from '../assets/components/AdminMenu'

function Createcategory() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                <AdminMenu/>
                </Col>

                <Col md={9}>
                <h1>Create Category</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Createcategory