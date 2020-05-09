// import "./CollectionForHolder.scss";
import React from "react";
import PropTypes from "prop-types";

// JS Rendering CSS
import { CollectionForHolderContainer } from "./CollectionForHolderStyles";

/**
 * @CollectionForHolder - reusable JSX Component
 * @param {dataCollection} - collection of data as an array
 * @param {children} - component to represent each object from an array
 */

const CollectionForHolder = ({ dataCollection, children }) => {
  return (
    <CollectionForHolderContainer data-test="collection-for-holder">
      {dataCollection && children
        ? dataCollection.map((data) => {
            // return <FeedbackCard key={data._id} data={data} />;
            return React.cloneElement(children, { key: data._id, data: data });
          })
        : null}
    </CollectionForHolderContainer>
  );
};

CollectionForHolder.propTypes = {
  dataCollection: PropTypes.array,
  children: PropTypes.object,
};

export default CollectionForHolder;
