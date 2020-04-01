// import "./ErrorBoundary.scss";
import React, { Component } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { openModal } from "../../redux/modal/modal.actions";

// JS rendering CSS
import {
  ErrorBoundaryContainer,
  ErrorBoundaryErrorSVG,
  ErrorBoundaryText,
  ErrorBoundaryTitle,
  ErrorBoundaryCry
} from "./ErrorBoundaryStyles";

// component constants
import errorBoundaryData from "./ErrorBoundaryConstants";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    const { openModal } = this.props;
    console.log(error.message, "error");
    openModal({
      header: "Error!",
      content: "You likely experienced connection issues!"
    });
  }

  render() {
    const { hasErrored } = this.state;
    const { lang } = this.props;
    const { errorBoundaryTitle, errorBoundaryCry } = errorBoundaryData[lang];
    if (hasErrored) {
      return (
        <ErrorBoundaryContainer>
          <ErrorBoundaryErrorSVG />
          <ErrorBoundaryText>
            <ErrorBoundaryTitle>{errorBoundaryTitle}</ErrorBoundaryTitle>
            <ErrorBoundaryCry>{errorBoundaryCry}</ErrorBoundaryCry>
          </ErrorBoundaryText>
        </ErrorBoundaryContainer>
      );
    } else {
      return this.props.children;
    }
  }
}

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, { openModal })(ErrorBoundary);
