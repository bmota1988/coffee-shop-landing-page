import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../style/ContactSection.css";

function ContactSection() {
  return (
    <div className="container-contact">
      <h1>Contact us</h1>
      <div className="contact-info">
        <div className="contact-phone">
          <h4>
            <span class="material-symbols-outlined">call</span> Phone:
          </h4>
          <p>123-456-7890</p>
        </div>
        <div className="contact-email">
          <h4>
            <span class="material-symbols-outlined">mail</span> Email:
          </h4>
          <p>5fXkz@example.com</p>
        </div>
        <div className="contact-address">
          <h4>
            <span class="material-symbols-outlined">location_on</span> Address:
          </h4>
          <p>123 Main Street, Anytown USA</p>
        </div>
      </div>
      <div className="contact-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Give us your thoughts</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactSection;
