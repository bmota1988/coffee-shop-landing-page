import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "../style/ContactSection.css";

function ContactSection() {
  return (
    <div className="container-contact">
      <h1>Contact Us</h1>
      <br />
      <br />
      <div className="contact-info">
        <Tabs defaultActiveKey="contact" id="contact-tab" className="mb-3">
          <Tab eventKey="phone" title="Phone">
            +1 (555) 123-4567
          </Tab>
          <Tab eventKey="email" title="Email">
            coffeedelights@example.com
          </Tab>
          <Tab eventKey="address" title="Address">
            123 Main Street, Anytown USA
          </Tab>
        </Tabs>
      </div>
      <br />
      <br />
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
