import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <a href="https://github.com/Saml415">
            <Image
              src="https://banner2.cleanpng.com/20180704/uxe/kisspng-github-computer-icons-icon-design-desktop-wallpape-5b3d36142dd125.8636932415307381961877.jpg"
              roundedCircle
              className="account-logos"
            />
          </a>
          <a href="https://www.linkedin.com/in/samuel-lloyd-94319320a/">
            <Image
              src="https://image.flaticon.com/icons/png/512/61/61109.png"
              roundedCircle
              className="account-logos"
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
