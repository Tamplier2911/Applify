// import "./App.scss";
// import React, {useEffect, lazy, Suspense} from "react";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { openModal } from "./redux/modal/modal.actions";
import { selectIsLogged } from "./redux/auth/auth.selectors";
import { fetchAuthObjectStart } from "./redux/auth/auth.actions";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Sidenav from "./components/Sidenav/Sidenav";
import Modal from "./components/Modal/Modal";
import LanguagePannel from "./components/LanguagePanel/LanguagePanel";

// pages
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import BlogPost from "./components/BlogPost/BlogPost";

// JS rendering CSS
import { AppContainer, AppMain } from "./AppStyles";

const App = ({ openModal, fetchAuthObjectStart, isLogged }) => {
  useEffect(() => {
    // openModal({
    //   header: "Attention!",
    //   content: "App is currently in development, back-end is not yet wired up."
    // });
    fetchAuthObjectStart();
  }, [openModal, fetchAuthObjectStart]);

  return (
    <AppContainer>
      <Header />
      <Sidenav />
      <Modal />

      <AppMain>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route
            exact
            path="/authorization"
            render={() =>
              isLogged ? <Redirect to="" /> : <AuthorizationPage />
            }
          />
          <Route
            exact
            path="/forgotPassword"
            component={() => <div>Forgotten :[</div>}
          />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route exact path="/feedback" component={FeedbackPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/blog/:id" component={BlogPost} />
          <div>Remove this once Back is wired</div>
        </Switch>
        <LanguagePannel />
      </AppMain>

      <Footer />
    </AppContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isLogged: selectIsLogged
});

export default connect(mapStateToProps, { openModal, fetchAuthObjectStart })(
  App
);
/*
<Route
    exact
    path="/surveys"
    render={() =>
      !currentUser ? <Redirect to="/" /> : <SurveyPage />
    }
  />
  <Route
    path="/surveys/:id"
    render={() =>
      !currentUser ? <Redirect to="/" /> : <SingleSurveyPage />
    }
  />
  */
