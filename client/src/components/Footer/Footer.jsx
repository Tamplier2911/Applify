// import "./Footer.scss";
import React from "react";

// JS Rendering CSS
import {
  FooterContainer,
  FooterContent,
  FooterSVGContainer,
  FacebookSVG,
  GitHubSVG,
  LinkedInSVG,
  FooterTextContainer
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSVGContainer>
          <FacebookSVG />
          <GitHubSVG />
          <LinkedInSVG />
        </FooterSVGContainer>
        <FooterTextContainer>
          Originally designed and developed by Artem Nikolaiev &copy;
        </FooterTextContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
