import React from "react";
import "../style/ButtonsSlick.css";

const NextButton = ({ onClick }) => (
  <button className="slick-arrow custom-slick-next" onClick={onClick}>
    <span class="material-symbols-outlined">arrow_forward_ios</span>
  </button>
);

const PrevButton = ({ onClick }) => (
  <button className="slick-arrow custom-slick-prev" onClick={onClick}>
    <span class="material-symbols-outlined">arrow_back_ios</span>
  </button>
);

export { NextButton, PrevButton };
