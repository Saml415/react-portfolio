import React from "react";
import { Card, Button } from "react-bootstrap";
function Projects({ name, description, id, link }) {
  return (
    <Card>
      <a href={link}>
        <Card.Img
          variant="top"
          src="https://saml415.github.io/portfolio/assets/images/Kode.PNG"
        />
      </a>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Projects;
