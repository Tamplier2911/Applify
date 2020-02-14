// import "./Footer.scss";
import React from "react";

// JS Rendering CSS
import {
  FooterContainer,
  FooterContent,
  FooterSVGContainer,
  FooterLink,
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
          <FooterLink
            href="https://www.facebook.com/artyom.nikolayev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookSVG />
          </FooterLink>
          <FooterLink
            href="https://github.com/Tamplier2911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubSVG />
          </FooterLink>
          <FooterLink
            href="https://github.com/Tamplier2911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInSVG />
          </FooterLink>
        </FooterSVGContainer>
        <FooterTextContainer>
          Originally designed and developed by Artem Nikolaiev &copy; 2020
        </FooterTextContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
