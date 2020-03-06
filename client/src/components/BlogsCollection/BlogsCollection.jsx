import "./BlogsCollection.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentSet,
  selectAllSets,
  selectCurrentSlot,
  selectAllSlots
} from "../../redux/blogs/blogs.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import {
  setCurrentSetNext,
  setCurrentSetPrev,
  setCurrentSetBySlot
} from "../../redux/blogs/blogs.actions";

// components
import BlogPostView from "../BlogPostView/BlogPostView";

// JS Rendering CSS
import {} from "./BlogsCollectionStyles";

// component constatns
import blogsCollectionData from "../../utils/ComponentBlogsCollectionConstants/componentBlogsCollectionConstants";

const BlogsCollection = ({
  currentDataSet,
  allDataSets,
  currentDataSlot,
  allDataSlots,
  setCurrentSetNext,
  setCurrentSetPrev,
  setCurrentSetBySlot,
  lang
}) => {
  const { blogsCollectionHeader } = blogsCollectionData[lang];

  let count = -1;
  return (
    <div className="blogs-collection">
      <h2 className="blogs-collection__title">{blogsCollectionHeader}</h2>
      <div className="blogs-collection__blogs">
        {currentDataSet.map(blog => {
          const { id } = blog;
          count++;
          return <BlogPostView {...blog} key={id} pos={count} />;
        })}
        <div className="blogs-collection__navigation">
          <div
            className={`blogs-collection__navigation--left ${
              currentDataSlot === 1 ? "disabled" : ""
            }`}
            onClick={
              currentDataSlot === 1 ? () => {} : () => setCurrentSetPrev()
            }
          >
            &#x3c;
          </div>
          {Object.keys(allDataSets).map(key => {
            const keyNum = parseInt(key);
            return (
              <div
                key={key}
                className={`blogs-collection__navigation--${key} ${
                  currentDataSlot === keyNum ? "selected" : ""
                }`}
                onClick={() => setCurrentSetBySlot(keyNum)}
              >
                {key}
              </div>
            );
          })}
          <div
            className={`blogs-collection__navigation--right ${
              currentDataSlot === allDataSlots ? "disabled" : ""
            }`}
            onClick={
              currentDataSlot === allDataSlots
                ? () => {}
                : () => setCurrentSetNext()
            }
          >
            &#x3e;
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentDataSet: selectCurrentSet,
  allDataSets: selectAllSets,
  currentDataSlot: selectCurrentSlot,
  allDataSlots: selectAllSlots,
  lang: selectCurrentLanguage
});

export default connect(mapStateToProps, {
  setCurrentSetNext,
  setCurrentSetPrev,
  setCurrentSetBySlot
})(BlogsCollection);
