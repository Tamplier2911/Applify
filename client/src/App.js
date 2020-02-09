import "./App.scss";
// import React, {useEffect, lazy, Suspense} from "react";
import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

// redux

// components
import Square from "./components/Square/Square";

// pages

// JS rendering CSS
import { HomepageContainer } from "./AppStyles";

import { squares, ctaOptions } from "./utils/SquareConstants/squareConstants";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div>header</div>
      </header>

      <main className="main">
        <div className="main__hero">
          {squares.map(obj => {
            return <Square key={obj.id} options={obj} />;
          })}
          <div className="CTA_active">
            <Link to="/">
              <Square options={ctaOptions} text={"Get Started"} />
            </Link>
          </div>
          <div className="main__hero--heading">
            <h1>Artem Nikolaiev</h1>
            <h3>Creative web solutions for your business...</h3>
            <Link to="/" className="CTA_passive">
              Get Started
            </Link>
          </div>
        </div>
        <div>Hello, portfolio!</div>
      </main>

      <footer className="footer">
        <div>footer</div>
      </footer>
    </div>
  );
};

export default App;
