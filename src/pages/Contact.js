import React from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/Footer";
import "./Contact.css";
export default function Contact() {
  return (
    <div>
      <Form className="form-card">
        <Form.Group className="form-titles mb-3" controlId="formBasicName">
          <Form.Label className="form-titles">Name:</Form.Label>
          <Form.Control type="email" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="form-titles mb-5" controlId="formBasicEmail">
          <Form.Label className="form-titles mb-3">Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group className="form-titles mb-5" controlId="formBasicEmail">
          <Form.Label className="form-titles mb-3">Message:</Form.Label>
          <Form.Control type="email" placeholder="Enter Message" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </div>
  );
}
