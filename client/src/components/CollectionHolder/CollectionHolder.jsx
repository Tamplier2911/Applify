// import './CollectionHolder.scss';
import React from "react";
import PropTypes from "prop-types";

// components
import Refresher from "../Refresher/Refresher";

// JS Rendering CSS
import {
  CollectionHolderContainer,
  CollectionHolderTitle,
  CollectionHolderWrapper,
} from "./CollectionHolderStyles";

/**
 * @CollectionForHolder - reusable JSX Component
 * @param {children} - collection of objects withspinner or not
 * @param {title} - collection title type of sting
 * @param {lang} - language either "eng", "rus" or "ukr" type of string
 * @param {refresher} - should refresher display or not type of number 0 or 1
 * @param {cb} - action that refresher triggers onClick type of function
 */

const CollectionHolder = ({ children, title, lang, refresher, cb }) => {
  return (
    <CollectionHolderContainer data-test="collection-for-holder">
      <CollectionHolderTitle lang={lang}>{title}</CollectionHolderTitle>
      <CollectionHolderWrapper data-test="collection-for-holder-children">
        {children ? children : null}
      </CollectionHolderWrapper>
      {refresher ? (
        <Refresher
          click={() => cb()}
          data-test="collection-for-holder-refresher"
        />
      ) : null}
    </CollectionHolderContainer>
  );
};

CollectionHolder.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  lang: PropTypes.string,
  refresher: PropTypes.number,
  cb: PropTypes.func,
};

export default CollectionHolder;
