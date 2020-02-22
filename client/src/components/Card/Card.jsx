import "./Card.scss";
import React from "react";

const Card = ({ title, text, gradient, SVG, id }) => {
  return (
    <div
      className={`home-cards__card card-${id}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]}`
      }}
    >
      <div className="home-cards__card--icon">
        <SVG
          className="home-cards__card--image"
          style={{ fill: gradient[0] }}
        />
      </div>
      <div className="home-cards__card--content">
        <h4 className="home-cards__card--title">{title}</h4>
        <div className="home-cards__card--text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
