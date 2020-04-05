// import "./BlogsCollection.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import {
  setCurrentSetNext,
  setCurrentSetPrev,
  setCurrentSetBySlot,
} from "../../redux/blogs/blogs.actions";

// components
import BlogPostView from "../BlogPostView/BlogPostView";
import BlogPlaceholder from "../BlogPlaceholder/BlogPlaceholder";

// JS Rendering CSS
import {
  BlogsCollectionContainer,
  BlogsCollectionTitle,
  BlogsCollectionBlogs,
  BlogsCollectionNav,
  BlogsCollectionNavLeft,
  BlogsCollectionNavNum,
  BlogsCollectionNavRight,
} from "./BlogsCollectionStyles";

// component constatns
import blogsCollectionData from "./BlogsCollectionConstants";

const BlogsCollection = ({
  blogsData,
  setCurrentSetNext,
  setCurrentSetPrev,
  setCurrentSetBySlot,
  lang,
}) => {
  const {
    currentDataSet,
    allDataSets,
    currentDataSlot,
    allDataSlots,
  } = blogsData;

  const { blogsCollectionHeader } = blogsCollectionData[lang];

  // if current sent is not empty set of 6 blogposts,
  // fill current set with fillers to reflect original page look.
  const dataSetLength = currentDataSet.length;
  if (dataSetLength > 0 && dataSetLength < 6) {
    for (let i = dataSetLength; i < 6; i++) {
      currentDataSet.push({ filler: true, _id: i });
    }
  }

  let count = -1;
  return (
    <BlogsCollectionContainer>
      <BlogsCollectionTitle>{blogsCollectionHeader}</BlogsCollectionTitle>
      <BlogsCollectionBlogs animateIn="bounceInUp" animateOnce={true}>
        {currentDataSet.map((blog, i) => {
          const { _id } = blog;
          count++;
          if (!blog.filler) {
            return (
              <BlogPostView
                blog={blog}
                key={_id}
                pos={count}
                slot={currentDataSlot}
                index={i}
              />
            );
          }
          return <BlogPlaceholder key={_id} pos={count} />;
        })}
        <BlogsCollectionNav>
          <BlogsCollectionNavLeft
            {...(currentDataSlot === 1 ? { disabled: 1 } : { disabled: 0 })}
            onClick={
              currentDataSlot === 1 ? () => {} : () => setCurrentSetPrev()
            }
          >
            &#x3c;
          </BlogsCollectionNavLeft>
          {Object.keys(allDataSets).map((key) => {
            const keyNum = parseInt(key);
            return (
              <BlogsCollectionNavNum
                key={key}
                {...(currentDataSlot === keyNum
                  ? { selected: 1 }
                  : { selected: 0 })}
                onClick={() => setCurrentSetBySlot(keyNum)}
              >
                {key}
              </BlogsCollectionNavNum>
            );
          })}
          <BlogsCollectionNavRight
            {...(currentDataSlot === allDataSlots
              ? { disabled: 1 }
              : { disabled: 0 })}
            onClick={
              currentDataSlot === allDataSlots
                ? () => {}
                : () => setCurrentSetNext()
            }
          >
            &#x3e;
          </BlogsCollectionNavRight>
        </BlogsCollectionNav>
      </BlogsCollectionBlogs>
    </BlogsCollectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps, {
  setCurrentSetNext,
  setCurrentSetPrev,
  setCurrentSetBySlot,
})(BlogsCollection);
