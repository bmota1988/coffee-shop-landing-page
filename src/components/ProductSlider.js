import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function ProductSlider() {
  return (
    <div className="slider-container">
      <Carousel variant="light" slide={false} interval={2000}>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-slide"
            src="./expresso_coffee.jpg"
            alt="Expresso"
            fluid
          />
          <Carousel.Caption>
            <h5>Expresso</h5>
            <p>$2.99</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-slide"
            src="./cappuccino.jpg"
            alt="Cappuccino"
            fluid
          />
          <Carousel.Caption>
            <h5>Cappuccino</h5>
            <p>$3.99</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-slide"
            src="./americano.jpg"
            alt="Americano"
            fluid
          />
          <Carousel.Caption>
            <h5>Americano</h5>
            <p>$4.99</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100 img-slide"
            src="./latte.jpg"
            alt="Latte"
            fluid
          />
          <Carousel.Caption>
            <h5>Latte</h5>
            <p>$5.99</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ProductSlider;
