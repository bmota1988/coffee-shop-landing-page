import React from "react";
import "../style/Home.css"; // Import the CSS file for the Home component
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Coffee Delights!</h1>
          <h2>Discover the best coffee on the planet.</h2>
          <Button variant="outline-info" onClick={handleShow} className="me-2">
            Learn More
          </Button>
          <Offcanvas
            placement="start"
            data-bs-theme="dark"
            show={show}
            onHide={handleClose}
            className="hero-offcanvas"
            closeButton
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Welcome customer!</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="text-justify">
                Learn More Coffee Shop is a cozy haven for coffee enthusiasts
                and knowledge seekers alike. Nestled in the heart of the city,
                our warm and inviting space is designed to inspire curiosity and
                connection. As you step through the door, the rich aroma of
                freshly ground coffee beans welcomes you, setting the stage for
                a sensory journey.
              </p>
              <p className="text-justify">
                Our menu is a carefully curated selection of premium coffee
                blends sourced from around the world, each cup crafted with
                precision and passion. Whether you prefer the robust notes of a
                dark roast or the subtle nuances of a light brew, our skilled
                baristas are dedicated to delivering a customized and
                exceptional coffee experience.
              </p>
              <p className="text-justify">
                Beyond the artistry of coffee-making, Learn More is a hub for
                intellectual exploration. Adorned with bookshelves stocked with
                an eclectic range of titles, our coffee shop invites patrons to
                delve into the world of literature, fostering an atmosphere
                where ideas flow as freely as the coffee. Feel free to lose
                yourself in a good book, engage in stimulating conversations, or
                even join one of our regular book clubs and discussion groups.
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}

export default Home;
