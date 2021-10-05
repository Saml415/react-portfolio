import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./About.css";

export default function About() {
  return (
    <>
      <div className="aboutsection">
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
          <Row>
            <p className="aboutme">
              My name is Sam Lloyd. I am a web developer from San Diego,
              California. I coded on and off again in the past but decided to
              pursue coding and more specifically web development while studying
              Mechanical Engineering in college. I have had experience in
              similar graphic design fields such as being a member of my high
              schools yearbook team where we placed top 3 at the San Diego
              County Fair including 1st place for our division nationally my
              junior year while also receiving personal awards for my spreads. I
              can code effectively in HTML, CSS, Javascript and Python however
              like many developers Im still learning. When I am not coding my
              hobbies include baseball, listening to records and playing video
              games with my friends.
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
}
