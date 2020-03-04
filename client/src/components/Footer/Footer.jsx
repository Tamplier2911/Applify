// import "./Footer.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

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

// Component Constants
import footerData from "../../utils/ComponentFooterConstants/componentFooterConstants";

const Footer = ({ lang }) => {
  const currentData = footerData[lang];
  const { footerCopyright } = currentData;

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
        <FooterTextContainer>{footerCopyright}</FooterTextContainer>
      </FooterContent>
    </FooterContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps)(Footer);
