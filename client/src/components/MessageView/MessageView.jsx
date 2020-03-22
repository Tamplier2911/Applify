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
    image = `${"api/" + photo}`;
  }

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
        <MessageViewMessage>{message}</MessageViewMessage>
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
