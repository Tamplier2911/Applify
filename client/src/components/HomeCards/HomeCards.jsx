// import "./HomeCards.scss";
import React from "react";

// components
import Card from "../Card/Card";

// JS Rendering CSS
import {
  HomeCardContainer,
  IconTimeSVG,
  IconResponsiveSVG,
  IconTechSVG,
  IconShieldSVG
} from "./HomeCardsStyles";

const cards = [
  {
    id: 201,
    gradient: ["rgb(240, 152, 25)", "rgb(237, 223, 94)"],
    title: "Rapid Development",
    text: "I value your time",
    svg: IconTimeSVG
  },
  {
    id: 202,
    gradient: ["rgb(72, 128, 236)", "rgb(1, 156, 173)"],
    title: "Responsive Design",
    text: "For any device",
    svg: IconResponsiveSVG
  },
  {
    id: 203,
    gradient: ["rgb(255, 81, 47)", "rgb(221, 36, 118)"],
    title: "Cutting Edge",
    text: "Supreme technologies",
    svg: IconTechSVG
  },
  {
    id: 204,
    gradient: ["rgb(60, 165, 92)", "rgb(182, 173, 73)"],
    title: "One Week Warranty",
    text: "Free adjustments",
    svg: IconShieldSVG
  }
];

export const HomeCards = () => {
  return (
    <HomeCardContainer>
      {cards.map(card => {
        const { icon, title, text, gradient, svg, id } = card;
        return (
          <Card
            icon={icon}
            title={title}
            text={text}
            gradient={gradient}
            key={id}
            id={id}
            SVG={svg}
          />
        );
      })}
    </HomeCardContainer>
  );
};

export default HomeCards;
