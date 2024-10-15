import React from 'react'
import { Col, Container } from 'react-bootstrap'
import AdminMenu from '../assets/components/AdminMenu'
function Users() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                <AdminMenu/>
                </Col>

                <Col md={9}>
                <h1>All Users</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Users