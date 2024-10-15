import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserMenu from '../assets/components/UserMenu'

function Profile() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3}>
                <UserMenu/>
                </Col>

                <Col md={9}>
                <h1>Your Profile</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Profile