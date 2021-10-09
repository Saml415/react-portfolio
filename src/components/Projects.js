import React from "react";
import { Card, Button } from "react-bootstrap";
function Projects({ name, description, id, link, image, link2, linkname }) {
  console.log(image);
  return (
    <Card>
      <a href={link}>
        <Card.Img src={image} />
      </a>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <a href={link2}>
          <Card.Text>{linkname}</Card.Text>
        </a>
      </Card.Body>
    </Card>
  );
}
export default Projects;
