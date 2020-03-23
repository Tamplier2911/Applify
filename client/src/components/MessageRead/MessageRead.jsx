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

  // FIX MESSAGE LOADING ALGORITHM
  // ISSUES IS /profile/ find way to rid of profile
  //                                    \/
  // https://applify-s.herokuapp.com/profile/api/uploads/images/users/user-5e6e618672e9151d503701ed-1584642619899.jpeg

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
        <div>Name: {name}</div>
        <div>Email: {email}</div>
        <div>
          <div style={{ width: "10rem", height: "10rem" }}>
            <img
              alt="happy user"
              src={image}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover"
              }}
            ></img>
          </div>
        </div>
      </div>
      <div>
        <div>Message: {message}</div>
      </div>
      <div>
        <div>Date: {date}</div>
      </div>
      <div>
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
