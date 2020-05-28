// import "./MessagesHolder.scss";
import React, { useEffect, useState } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { loadMessagesStart } from "../../redux/messages/messages.actions";
import {
  selectAllMessages,
  selectIsLoading,
} from "../../redux/messages/messages.selectors";

// components
import WithSpinnerHOC from "../../components/WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
import MessagesCollection from "../MessagesCollection/MessagesCollection";
import FormInput from "../FormInput/FormInput";

// data transformations
import { simpleMessageSearch } from "../../utils/DataTransformations/simpleSearches";

// JS Rendering CSS
import {
  MessagesHolderContainer,
  MessageHolderInputBarContainer,
} from "./MessagesHolderStyles";

// component constants
import messagesHolderData from "./MessagesHolderConstants";

// Buffing MessagesCollection with Spinner
const MessagesCollectionWithSpinner = WithSpinnerHOC(MessagesCollection);

const MessagesHolder = ({ lang, loadMessagesStart, messages, isLoading }) => {
  useEffect(() => {
    if (!messages.length) {
      loadMessagesStart();
    }
  }, [loadMessagesStart, messages.length]);

  const [searchInput, setSearchInput] = useState({ search: "" });
  const { search } = searchInput;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const messagesArray = simpleMessageSearch(messages, search.toLowerCase());

  const { messagesHolderTitle, messageHolderSearch } = messagesHolderData[lang];
  return (
    <MessagesHolderContainer data-test="messages-holder">
      <MessageHolderInputBarContainer data-test="messages-holder-search">
        <FormInput
          onInputChange={(e) => onInputChange(e)}
          value={search}
          name="search"
          label={messageHolderSearch}
          type="text"
        />
      </MessageHolderInputBarContainer>
      <CollectionHolder
        lang={lang}
        title={messagesHolderTitle}
        refresher={1}
        cb={loadMessagesStart}
        data-test="messages-holder-collection-holder"
      >
        <MessagesCollectionWithSpinner
          data-test="messages-holder-collection"
          isLoading={isLoading}
          messages={messagesArray}
        />
      </CollectionHolder>
    </MessagesHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
  messages: selectAllMessages,
  isLoading: selectIsLoading,
});

export default connect(mapStateToProps, { loadMessagesStart })(MessagesHolder);
