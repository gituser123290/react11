import React from 'react'
import { Col, Container, Row,Button } from 'react-bootstrap'

function Myreactbootstrap() {
  return (
    <Container>
        <Row>
            <Col>use react bootstrap</Col>
            <Col>use react bootstrap</Col>
            <Col>use react bootstrap</Col>
            <Col>use react bootstrap  <Button variant="primary">Primary</Button></Col>
        </Row>
    </Container>
  )
}

export default Myreactbootstrap