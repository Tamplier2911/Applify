import "./App.scss";
// import React, {useEffect, lazy, Suspense} from "react";
import React, { useEffect } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { openModal } from "./redux/modal/modal.actions";

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
// import { HomepageContainer } from "./AppStyles";

const App = ({ openModal }) => {
  useEffect(() => {
    // openModal({
    //   header: "Attention!",
    //   content: "App is currently in development."
    // });
  }, [openModal]);

  return (
    <div className="container">
      <Header />
      <Sidenav />
      <Modal />

      <main className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/authorization" component={AuthorizationPage} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route exact path="/feedback" component={FeedbackPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route path="/blog/:id" component={BlogPost} />
          <div>Test</div>
        </Switch>
        <LanguagePannel />
      </main>

      <Footer />
    </div>
  );
};

export default connect(null, { openModal })(App);
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
