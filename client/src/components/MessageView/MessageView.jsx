// import "./MessageView.scss";
import React from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { deleteMessageStart } from "../../redux/messages/messages.actions";

// components
import Button from "../Button/Button";

// transformations
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";

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
  MessageViewLink,
} from "./MessageViewStyles";

// component constants
import messageViewData from "./MessageViewConstants";

const MessageView = ({
  createdAt,
  _id,
  name,
  email,
  message,
  from,
  lang,
  deleteMessageStart,
}) => {
  let image = getImageRelativePath(from ? from.photo : "");

  const date = new Date(createdAt).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const { messageViewRead, messageViewDelete } = messageViewData[lang];
  return (
    <MessageViewContainer
      data-test="message-view"
      animateIn={"flipInX"}
      animateOnce={true}
    >
      <MessageViewPortrait>
        <MessageViewImageWrap>
          <MessageViewImage alt="happy user" src={`${image}`} />
        </MessageViewImageWrap>
      </MessageViewPortrait>
      <MessageViewContent data-test="message-view-content">
        <MessageViewName>{name}</MessageViewName>
        <MessageViewEmail>{email}</MessageViewEmail>
        <MessageViewMessage>
          {message.slice(0, 200) + (message[201] ? "..." : "")}
        </MessageViewMessage>
        <MessageViewDate>{date}</MessageViewDate>
      </MessageViewContent>
      <MessageViewControlls data-test="message-view-controls">
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

MessageView.propTypes = {
  createdAt: PropTypes.string,
  _id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  message: PropTypes.string,
  from: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, { deleteMessageStart })(MessageView);
