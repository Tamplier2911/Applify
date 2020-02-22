import "./HomeCards.scss";
import React from "react";

// components
import Card from "../Card/Card";

// JS Rendering CSS
import {} from "./HomeCardsStyles";

import { ReactComponent as TimeSVG } from "../../assets/svg/time.svg";
import { ReactComponent as ResponsiveSVG } from "../../assets/svg/responsive.svg";
import { ReactComponent as TechSVG } from "../../assets/svg/technologies.svg";
import { ReactComponent as ShieldSVG } from "../../assets/svg/shield.svg";

const cards = [
  {
    id: 201,
    gradient: ["rgb(240, 152, 25)", "rgb(237, 223, 94)"],
    title: "Rapid Development",
    text: "I value your time",
    svg: TimeSVG
  },
  {
    id: 202,
    gradient: ["rgb(72, 128, 236)", "rgb(1, 156, 173)"],
    title: "Responsive Design",
    text: "For any device",
    svg: ResponsiveSVG
  },
  {
    id: 203,
    gradient: ["rgb(255, 81, 47)", "rgb(221, 36, 118)"],
    title: "Cutting Edge",
    text: "Supreme technologies",
    svg: TechSVG
  },
  {
    id: 204,
    gradient: ["rgb(60, 165, 92)", "rgb(182, 173, 73)"],
    title: "1 week warranty",
    text: "Free adjustments",
    svg: ShieldSVG
  }
];

export const HomeCards = () => {
  return (
    <div className="home-cards">
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
    </div>
  );
};

export default HomeCards;
