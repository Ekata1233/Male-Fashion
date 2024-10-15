import React from 'react'
import UserMenu from '../assets/components/UserMenu'
import { Col, Container, Row } from 'react-bootstrap'

function Orders() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                <UserMenu/>
                </Col>

                <Col md={9}>
                <h1>All Orders</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Orders