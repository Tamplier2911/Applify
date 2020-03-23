// import "./MessageView.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { deleteMessageStart } from "../../redux/messages/messages.actions";

// components
import Button from "../Button/Button";

// JS Rendering CSS
import {
  MessageViewContainer,
  MessageViewPortrait,
  MessageViewImageWrap,
  MessageViewImage,
  MessageViewContent,
  MessageViewName,
  MessageViewEmail,
  MessageViewMessage,
  MessageViewDate,
  MessageViewControlls,
  MessageViewLink
} from "./MessageViewStyles";

// component constants
import messageViewData from "../../utils/ComponentMessageViewConstants/componentMessageViewConstants";

const MessageView = ({
  createdAt,
  _id,
  name,
  email,
  message,
  from,
  lang,
  deleteMessageStart
}) => {
  let locationHref = window.location.href.split("/");
  locationHref = "".concat(locationHref[0], "//", locationHref[2], "/");
  console.log(locationHref, "location");
  // FIX IMAGE LOADING ALGORITHM
  // ISSUES IS /profile/ find way to rid of profile
  //                                    \/
  // https://applify-s.herokuapp.com/profile/api/uploads/images/users/user-5e6e618672e9151d503701ed-1584642619899.jpeg

  let photo = "";
  if (from) {
    photo = from.photo;
  } else {
    photo = "uploads/images/users/default.jpg";
  }
  console.log(photo, "photo");

  const date = new Date(createdAt).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let image = "";
  if (process.env.NODE_ENV === "development" && photo) {
    image = `${locationHref + "api/" + photo}`;
  } else if (photo) {
    image = `${locationHref + "api/" + photo}`;
  }
  console.log(image, "image");

  const { messageViewRead, messageViewDelete } = messageViewData[lang];

  return (
    <MessageViewContainer>
      <MessageViewPortrait>
        <MessageViewImageWrap>
          <MessageViewImage alt="happy user" src={`${image}`} />
        </MessageViewImageWrap>
      </MessageViewPortrait>
      <MessageViewContent>
        <MessageViewName>{name}</MessageViewName>
        <MessageViewEmail>{email}</MessageViewEmail>
        <MessageViewMessage>
          {message.slice(0, 200) + (message[201] ? "..." : "")}
        </MessageViewMessage>
        <MessageViewDate>{date}</MessageViewDate>
      </MessageViewContent>
      <MessageViewControlls>
        <Button
          type="button"
          value={messageViewDelete}
          click={() => deleteMessageStart(_id)}
        />
        <MessageViewLink to={`/profile/messages/${_id}`}>
          {messageViewRead}
        </MessageViewLink>
      </MessageViewControlls>
    </MessageViewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, { deleteMessageStart })(MessageView);
