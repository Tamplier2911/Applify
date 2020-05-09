// import "./Card.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import {
  CardContainer,
  CardIconWrapper,
  CardContent,
  CardContentTitle,
  CardContentText,
} from "./CardStyles";

// component motions
import cardMotions from "./CardMotions";

const Card = ({ title, text, gradient, SVG, id }) => {
  const [left, right] = gradient ? gradient : [];
  return (
    <CardContainer
      val={id}
      cl={{ left: left, right: right }}
      animateIn={cardMotions[id]}
      animateOnce={true}
      data-test="card-component"
    >
      <CardIconWrapper data-test="card-component-svg">
        {SVG ? <SVG style={{ fill: left }} /> : null}
      </CardIconWrapper>
      <CardContent data-test="card-component-content">
        <CardContentTitle>{title}</CardContentTitle>
        <CardContentText>{text}</CardContentText>
      </CardContent>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  gradient: PropTypes.array,
  SVG: PropTypes.object,
  id: PropTypes.number,
};

export default Card;
