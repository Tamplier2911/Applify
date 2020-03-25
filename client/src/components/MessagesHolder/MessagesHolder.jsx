// import "./MessagesHolder.scss";
import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { loadMessagesStart } from "../../redux/messages/messages.actions";
import {
  selectAllMessages,
  selectIsLoading
} from "../../redux/messages/messages.selectors";

// components
import WithSpinnerHOC from "../../components/WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
import MessagesCollection from "../MessagesCollection/MessagesCollection";

// JS Rendering CSS
import { MessagesHolderContainer } from "./MessagesHolderStyles";

// component constants
import messagesHolderData from "../../utils/ComponentMessagesHolderConstants/componentMessagesHolderConstants";

// Buffing MessagesCollection with Spinner
const MessagesCollectionWithSpinner = WithSpinnerHOC(MessagesCollection);

const MessagesHolder = ({ lang, loadMessagesStart, messages, isLoading }) => {
  useEffect(() => {
    if (!messages.length) {
      loadMessagesStart();
    }
  }, [loadMessagesStart, messages.length]);

  const { messagesHolderTitle } = messagesHolderData[lang];
  return (
    <MessagesHolderContainer>
      <CollectionHolder
        lang={lang}
        title={messagesHolderTitle}
        refresher={1}
        cb={loadMessagesStart}
      >
        <MessagesCollectionWithSpinner
          isLoading={isLoading}
          messages={messages}
        />
      </CollectionHolder>
    </MessagesHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  messages: selectAllMessages,
  isLoading: selectIsLoading
});

export default connect(mapStateToProps, { loadMessagesStart })(MessagesHolder);
