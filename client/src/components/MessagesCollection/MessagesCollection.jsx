// import "./MessagesCollection.scss";
import React from "react";
import PropTypes from "prop-types";

// components
import MessageView from "../MessageView/MessageView";

// JS Rendering CSS
import { MessagesCollectionContainer } from "./MessagesCollectionStyles";

const MessagesCollection = ({ messages }) => {
  return (
    <MessagesCollectionContainer data-test="messages-collection">
      {messages.map((message) => {
        const { _id } = message;
        return <MessageView key={_id} {...message} />;
      })}
    </MessagesCollectionContainer>
  );
};

MessagesCollection.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      email: PropTypes.string,
      from: PropTypes.object,
      message: PropTypes.string,
      name: PropTypes.string,
      _id: PropTypes.string,
    })
  ),
};

export default MessagesCollection;
