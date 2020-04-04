// import "./Card.scss";
import React from "react";

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
  return (
    <CardContainer
      val={id}
      cl={{ left: gradient[0], right: gradient[1] }}
      animateIn={cardMotions[id]}
      animateOnce={true}
    >
      <CardIconWrapper>
        <SVG style={{ fill: gradient[0] }} />
      </CardIconWrapper>
      <CardContent>
        <CardContentTitle>{title}</CardContentTitle>
        <CardContentText>{text}</CardContentText>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
