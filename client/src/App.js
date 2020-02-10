import "./App.scss";
// import React, {useEffect, lazy, Suspense} from "react";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// redux

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";

// pages

// JS rendering CSS
import { HomepageContainer } from "./AppStyles";

const App = () => {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Hero />
        <div>Hello, portfolio!</div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
