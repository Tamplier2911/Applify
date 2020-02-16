import "./Sidenav.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleSideNav } from "../../redux/sidenav/sidenav.actions";
import { selectSidenavHidden } from "../../redux/sidenav/sidenav.selectors";

// JS Rendering CSS

const data = {
  name: "Ulka Simone MohantyUlka Simone MohantyUlka Simone Mohanty",
  email: "ulkasimone@gmail.comulkasimone@gmail.comulkasimone@gmail.com",
  photo: "https://my-hit.org/storage/1967587_210x300x50x2.jpg"
};

const Sidenav = ({ sidenavCondition, toggleSideNav }) => {
  const { name, email, photo } = data;
  return ReactDOM.createPortal(
    <div
      className="sidenav"
      style={
        sidenavCondition ? { display: "none" } : { display: "inline-block" }
      }
      onClick={toggleSideNav}
    >
      <div className="sidenav__content" onClick={e => e.stopPropagation()}>
        <div className="sidenav__hero">
          <div className="sidenav__hero--imgCnt">
            <img
              className="sidenav__hero--img"
              src={photo}
              alt="Happy user."
            ></img>
          </div>
          <div className="sidenav__hero--userdata">
            <div className="sidenav__hero--name">{name}</div>
            <div className="sidenav__hero--email">{email}</div>
            <Link to="/" className="sidenav__hero--link">
              Log Out
            </Link>
          </div>
        </div>
        <nav className="sidenav__navigation">
          <ul className="sidenav__navigation--ul">
            <li className="sidenav__navigation--li">
              <Link
                to="/"
                onClick={toggleSideNav}
                className="sidenav__navigation--link"
              >
                Home
              </Link>
            </li>
            <li className="sidenav__navigation--li">
              <Link
                to="/"
                onClick={toggleSideNav}
                className="sidenav__navigation--link"
              >
                Resume
              </Link>
            </li>
            <li className="sidenav__navigation--li">
              <Link
                to="/"
                onClick={toggleSideNav}
                className="sidenav__navigation--link"
              >
                Portfolio
              </Link>
            </li>
            <li className="sidenav__navigation--li">
              <Link
                to="/"
                onClick={toggleSideNav}
                className="sidenav__navigation--link"
              >
                Contacts
              </Link>
            </li>
            <li className="sidenav__navigation--li">
              <Link
                to="/"
                onClick={toggleSideNav}
                className="sidenav__navigation--link"
              >
                Feedback
              </Link>
            </li>
            <li className="sidenav__navigation--li">
              <Link
                to="/"
                onClick={toggleSideNav}
                className="sidenav__navigation--link"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>,
    document.querySelector("#sidenav")
  );
};

const mapStateToProps = createStructuredSelector({
  sidenavCondition: selectSidenavHidden
});

export default connect(mapStateToProps, { toggleSideNav })(Sidenav);
