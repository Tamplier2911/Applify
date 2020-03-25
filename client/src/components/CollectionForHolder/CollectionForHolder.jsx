// import "./CollectionForHolder.scss";
import React from "react";

// JS Rendering CSS
import { CollectionForHolderContainer } from "./CollectionForHolderStyles";

// pass component constants from here or from holder
// reusable collection holder, required input:
// 1. dataCollection - collection of elements as an array
// 2. children - component to represent multiple data pices

const CollectionForHolder = ({ dataCollection, children }) => {
  return (
    <CollectionForHolderContainer>
      {dataCollection.map(data => {
        // return <FeedbackCard key={data._id} data={data} />;
        return React.cloneElement(children, { key: data._id, data: data });
      })}
    </CollectionForHolderContainer>
  );
};

export default CollectionForHolder;
