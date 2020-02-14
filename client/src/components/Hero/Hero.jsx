import "./Hero.scss";
import React from "react";

import Square from "../Square/Square";
import {
  squares,
  ctaOptions
} from "../../utils/SquareConstants/squareConstants";

// JS Rendering CSS
import {
  HeroContainer,
  HeroActiveCTA,
  HeroActiveCTALink,
  HeroContent,
  HeroTextbox,
  HeroHeader,
  HeroText,
  HeroPassiveCTA
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      {squares.map(obj => {
        return <Square key={obj.id} options={obj} />;
      })}
      <HeroActiveCTA>
        <HeroActiveCTALink to="/">
          <Square options={ctaOptions} text={"Get Started"} />
        </HeroActiveCTALink>
      </HeroActiveCTA>
      <HeroContent>
        <HeroTextbox>
          <HeroHeader>Artem Nikolaiev</HeroHeader>
          <HeroText>Creative web solutions for your business...</HeroText>
        </HeroTextbox>
        <HeroPassiveCTA to="/">Get Started</HeroPassiveCTA>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
