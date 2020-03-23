// import "./MessageRead.scss";
import React from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { selectMessage } from "../../redux/messages/messages.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { deleteMessageStart } from "../../redux/messages/messages.actions";

// components
import GetBack from "../GetBack/GetBack";
import Button from "../Button/Button";

// transformations
import getImageRelativePath from "../../utils/PathTransformations/getImageRelativePath";

// JS Rendering CSS
import {
  MessageReadContainer,
  MessageReadHeader,
  MessageReadCredentials,
  MessageReadName,
  MessageReadEmail,
  MessageReadPortrait,
  MessageReadWrapper,
  MessageReadImg,
  MessageReadBody,
  MessageReadMessage,
  MessageReadDateWrap,
  MessageReadDate,
  MessageReadControlls,
  MessageReadNotFound
} from "./MessageReadStyles";

// component constants
import messageReadData from "../../utils/ComponentMessageReadConstants/componentMessageReadConstants";

const MessageRead = ({ messageObject, lang, deleteMessageStart, history }) => {
  const { createdAt, name, email, message, from, _id } = messageObject
    ? messageObject
    : {};

  let image = getImageRelativePath(from ? from.photo : "");

  const date = new Date(createdAt).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const sendEmailTo = () => {
    const to = email;
    const subject = "applify-tech.com";
    const emailBody = `Greetings, ${name}!`;
    document.location = `mailto:${to}?subject=${subject}&body=${emailBody}`;
  };

  const deleteMessageAndRedirect = id => {
    deleteMessageStart(id);
    history.push("/profile/messages");
  };

  const {
    messageReadAnswer,
    messageReadDelete,
    messageReadNotFound
  } = messageReadData[lang];

  return messageObject ? (
    <MessageReadContainer>
      <MessageReadHeader>
        <MessageReadCredentials>
          <MessageReadName>{name}</MessageReadName>
          <MessageReadEmail>{email}</MessageReadEmail>
        </MessageReadCredentials>
        <MessageReadPortrait>
          <MessageReadWrapper>
            <MessageReadImg alt="happy user" src={image} />
          </MessageReadWrapper>
        </MessageReadPortrait>
      </MessageReadHeader>
      <MessageReadBody>
        <MessageReadMessage>{message}</MessageReadMessage>
      </MessageReadBody>
      <MessageReadDateWrap>
        <MessageReadDate>{date}</MessageReadDate>
      </MessageReadDateWrap>
      <MessageReadControlls>
        <Button
          type="button"
          value={messageReadDelete}
          click={() => deleteMessageAndRedirect(_id)}
        />
        <Button
          type="button"
          value={messageReadAnswer}
          click={() => sendEmailTo()}
        />
      </MessageReadControlls>
      <GetBack path={"/profile/messages"} />
    </MessageReadContainer>
  ) : (
    <MessageReadNotFound>{messageReadNotFound}</MessageReadNotFound>
  );
};

const mapStateToProps = (state, ownProps) => ({
  messageObject: selectMessage(ownProps.match.params.id)(state),
  lang: selectCurrentLanguage(state)
});

export default withRouter(
  connect(mapStateToProps, { deleteMessageStart })(MessageRead)
);
