// import './CollectionHolder.scss';
import React from "react";

// components
import Refresher from "../Refresher/Refresher";

// JS Rendering CSS
import {
  CollectionHolderContainer,
  CollectionHolderTitle,
  CollectionHolderWrapper
} from "./CollectionHolderStyles";

// props:
// title,
// children - collection of things,
// refresher - 1 or 0 (true / false),
// if refresher true cb for onclick event

const CollectionHolder = ({ children, title, lang, refresher, cb }) => {
  return (
    <CollectionHolderContainer>
      <CollectionHolderTitle lang={lang}>{title}</CollectionHolderTitle>
      <CollectionHolderWrapper>
        {children ? children : null}
      </CollectionHolderWrapper>
      {refresher ? <Refresher click={() => cb()} /> : null}
    </CollectionHolderContainer>
  );
};

export default CollectionHolder;
