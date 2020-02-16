import "./App.scss";
// import React, {useEffect, lazy, Suspense} from "react";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// redux

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Sidenav from "./components/Sidenav/Sidenav";

import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

// pages

// JS rendering CSS
import { HomepageContainer } from "./AppStyles";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Sidenav />

      <main className="main">
        <Hero />

        <Projects />

        <div>Test</div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
