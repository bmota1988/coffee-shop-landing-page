import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/ProductSlider.css";

// Sample product data
const products = [
  {
    id: 1,
    name: "Espresso",
    price: "$2.99",
    image: "./pexels-johnny-willz-997656.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    price: "$3.49",
    image: "./pexels-spencer-selover-428310.jpg",
  },
  {
    id: 3,
    name: "Latte",
    price: "$3.99",
    image: "./pexels-alex-tim-754958.jpg",
  },
  {
    id: 4,
    name: "Mocha",
    price: "$4.49",
    image: "./pexels-malidate-van-849645.jpg",
  },
  {
    id: 5,
    name: "Americano",
    price: "$2.99",
    image: "./pexels-skylar-kang-6207297.jpg",
  },
];

function ProductSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductSlider;
