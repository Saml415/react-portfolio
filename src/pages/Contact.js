import React, { useState } from "react";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import Footer from "../components/Footer";
import "./Contact.css";
import { validateEmail } from "../utils/helper";
export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  return (
    <div>
      <Form className="form-card" onSubmit={handleSubmit}>
        <Form.Group className="form-titles mb-3" controlId="formBasicName">
          <Form.Label className="form-titles">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Enter Name"
            onBlur={handleChange}
          />
        </Form.Group>

        <Form.Group className="form-titles mb-5" controlId="formBasicEmail">
          <Form.Label className="form-titles mb-3">Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            defaultValue={email}
            placeholder="Enter Email"
            onBlur={handleChange}
          />
        </Form.Group>
        <Form.Group className="form-titles mb-5" controlId="formBasicEmail">
          <Form.Label className="form-titles mb-3">Message:</Form.Label>
          <Form.Control
            name="message"
            rows="5"
            defaultValue={message}
            placeholder="Enter Message"
            onBlur={handleChange}
          />
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Footer />
    </div>
  );
}
