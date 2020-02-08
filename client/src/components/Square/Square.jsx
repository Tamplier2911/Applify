// import "./Square.scss";
import React from "react";

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
  SquareMaskNine
} from "./SquareStyles";

const Square = ({ options }) => {
  const properties = { ...options, id: null };
  console.log(properties);
  return (
    <SquareContainer {...properties}>
      <SquareMaskOne {...properties} />
      <SquareMaskTwo {...properties} />
      <SquareMaskThree {...properties} />
      <SquareMaskFour {...properties} />
      <SquareMaskFive {...properties} />
      <SquareMaskSix {...properties} />
      <SquareMaskSeven {...properties} />
      <SquareMaskEight {...properties} />
      <SquareMaskNine {...properties} />
      <SquareBody {...properties} />
    </SquareContainer>
  );
};

export default Square;
