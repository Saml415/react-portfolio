import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <Container fluid>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="https://media-exp1.licdn.com/dms/image/C4E03AQERm6PbWg6RHw/profile-displayphoto-shrink_200_200/0/1625285703012?e=1634774400&v=beta&t=Bmd-DL81oxRC8kVri3ylF7vLW0Q7R9PxdX1kStEdbXI"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
