import "./MessageRead.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectMessage } from "../../redux/messages/messages.selectors";

// components
import GetBack from "../GetBack/GetBack";

// JS Rendering CSS
import {} from "./MessageReadStyles";

const MessageRead = ({ messageObject }) => {
  const { createdAt, name, email, message, from } = messageObject;
  // FIX IMAGE LOADING ALGORITHM
  // ISSUES IS /profile/ find way to rid of profile
  //                                    \/      \/
  // https://applify-s.herokuapp.com/profile/messages/api/uploads/images/users/user-5e6e618672e9151d503701ed-1584642619899.jpeg
  // required href - https://applify-s.herokuapp.com/api/...
  let locationHref = window.location.href.split("/");
  locationHref = "".concat(locationHref[0], "//", locationHref[2], "/");

  let photo = "";
  if (from) {
    photo = from.photo;
  } else {
    photo = "uploads/images/users/default.jpg";
  }

  const date = new Date(createdAt).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let image = "";
  if (process.env.NODE_ENV === "development" && photo) {
    image = `${process.env.REACT_APP_SERVE_IMAGE_DEV + "api/" + photo}`;
  } else if (photo) {
    image = `${process.env.REACT_APP_SERVE_IMAGE_PROD + "api/" + photo}`;
  }

  return (
    <div className="message-read">
      <div className="message-read__header">
        <div className="message-read__name">Name: {name}</div>
        <div className="message-read__hemail">Email: {email}</div>
        <div className="message-read__portrait">
          <div className="message-read__portrait--wrap">
            <img
              alt="happy user"
              src={image}
              className="message-read__portrait--img"
            ></img>
          </div>
        </div>
      </div>
      <div className="message-read__body">
        <div className="message-read__message">Message: {message}</div>
      </div>
      <div className="message-read__date">
        <div className="message-read__date--itself">Date: {date}</div>
      </div>
      <div className="message-read__date--controlls">
        <div>BTN</div>
        <div>BTN</div>
      </div>
      <GetBack path={"/profile/messages"} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  messageObject: selectMessage(ownProps.match.params.id)(state)
});

export default withRouter(connect(mapStateToProps)(MessageRead));
