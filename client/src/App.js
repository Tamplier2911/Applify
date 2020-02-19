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

// pages
import HomePage from "./pages/HomePage/HomePage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

// JS rendering CSS
// import { HomepageContainer } from "./AppStyles";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidenav />
      <Modal />
      <main className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <div>Test</div>
        </Switch>
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
