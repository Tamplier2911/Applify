// import "./MessagesCollection.scss";
import React from "react";

// components
import MessageView from "../MessageView/MessageView";

// JS Rendering CSS
import { MessagesCollectionContainer } from "./MessagesCollectionStyles";

const MessagesCollection = ({ messages }) => {
  return (
    <MessagesCollectionContainer>
      {messages.map(message => {
        const { _id } = message;
        return <MessageView key={_id} {...message} />;
      })}
    </MessagesCollectionContainer>
  );
};

export default MessagesCollection;
