import "./App.scss";
// import React, {useEffect, lazy, Suspense} from "react";
import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

// redux

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Sidenav from "./components/Sidenav/Sidenav";
import Modal from "./components/Modal/Modal";
import LanguagePannel from "./components/LanguagePanel/LanguagePanel";

// pages
import HomePage from "./pages/HomePage/HomePage";
import ResumePage from "./pages/ResumePage/ResumePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import BlogPage from "./pages/BlogPage/BlogPage";

// JS rendering CSS
// import { HomepageContainer } from "./AppStyles";

// TEMPORARY
import BlogPost from "./components/BlogPost/BlogPost";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidenav />
      <Modal />

      <main className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
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

export default App;
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
