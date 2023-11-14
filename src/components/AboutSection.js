import React from "react";
import "../style/AboutSection.css";
import { Card, Stack } from "react-bootstrap";
import { Row } from "react-bootstrap";

function AboutSection() {
  return (
    <div className="about-container">
      <Card bg="light" className="padding-05 margin-adjust shadow-efect">
        <Card.Body>
          <Card.Title className="mb-3 text-center">
            About Coffee Delights
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            The Best Coffee
          </Card.Subtitle>
          <Card.Text>
            <Stack gap={3} className="text-justify">
              <Row>
                Welcome to Coffee Delights, your destination for the finest
                coffee experience. Our passion for coffee is evident in every
                cup we serve. We take pride in sourcing the best coffee beans
                from around the world and carefully crafting each cup to
                perfection.
              </Row>
              <Row>
                At Coffee Delights, it's not just about coffee; it's about
                creating moments and memories. Whether you're here for your
                morning brew, a cozy afternoon, or a friendly meet-up, we have
                the perfect coffee for every occasion. Our talented baristas are
                dedicated to providing you with a delightful coffee journey, one
                cup at a time.
              </Row>
            </Stack>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutSection;
