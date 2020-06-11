// import "./Square.scss";
import React from "react";
import PropTypes from "prop-types";

import {
  SquareContainer,
  SquareBody,
  SquareMaskOne,
  SquareMaskTwo,
  SquareMaskThree,
  SquareMaskFour,
  SquareMaskFive,
  SquareMaskSix,
  SquareMaskSeven,
  SquareMaskEight,
  SquareMaskNine,
} from "./SquareStyles";

const Square = ({ options, text }) => {
  const properties = { ...options, id: null };

  const getAnimationStyle = () => {
    return ["fadeInLeft", "fadeInRight", "fadeInUp", "fadeInDown"].splice(
      Math.floor(Math.random() * 4),
      1
    )[0];
  };

  return (
    <SquareContainer
      data-test="square"
      {...properties}
      animateIn={getAnimationStyle()}
      duration={2}
      animateOnce={true}
    >
      <SquareMaskOne {...properties} />
      <SquareMaskTwo {...properties} />
      <SquareMaskThree {...properties} />
      <SquareMaskFour {...properties} />
      <SquareMaskFive {...properties} />
      <SquareMaskSix {...properties} />
      <SquareMaskSeven {...properties} />
      <SquareMaskEight {...properties} />
      <SquareMaskNine {...properties} />
      <SquareBody data-test="square-body" {...properties}>
        {text ? text : null}
      </SquareBody>
    </SquareContainer>
  );
};

Square.propTypes = {
  options: PropTypes.shape({
    id: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    posX: PropTypes.number,
    posY: PropTypes.number,
    shadow: PropTypes.bool,
    color: PropTypes.string,
  }),
  test: PropTypes.string,
};

export default Square;
