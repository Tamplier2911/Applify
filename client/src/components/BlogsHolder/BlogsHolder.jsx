// import './BlogsHolder.scss';
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
// import { loadBlogsStart } from "../../redux/blogs/blogs.actions";
// import {
//   selectAllLoadedFeeds,
//   selectIsLoading
// } from "../../redux/blogs/blogs.selectors";

// components
import WithSpinnerHOC from "../WithSpinnerHOC/WithSpinnerHOC";
import CollectionHolder from "../CollectionHolder/CollectionHolder";
import CollectionForHolder from "../CollectionForHolder/CollectionForHolder";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";

// data formaters - "BLOG SEARCH REQUIRES LOGIC MODIFICATION"***********************
import { simpleBlogsSearch } from "../../utils/DataTransformations/simpleSearches";

// JS Rendering CSS
import {
  BlogsHolderContainer,
  BlogsHolderInputBarContainer
} from "./BlogsHolderStyles";

// component constants
import blogsHolderData from "../../utils/ComponentBlogsHolderConstants/componentBlogsHolderConstants";

const BlogsHolder = ({ lang, history }) => {
  useEffect(() => {}, []);

  const [searchInput, setSearchInput] = useState({ search: "" });
  const { search } = searchInput;
  const onInputChange = e => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const redirectToCreateBlogpost = () => {
    history.push("/");
  };

  // const blogsArray = simpleBlogsSearch(blogs, search);

  const {
    blogsHolderTitle,
    blogsHolderButton,
    blogsHolderSearch
  } = blogsHolderData[lang];

  return (
    <BlogsHolderContainer>
      <Button
        type="button"
        value={blogsHolderButton}
        click={redirectToCreateBlogpost}
      />
      <BlogsHolderInputBarContainer>
        <FormInput
          onInputChange={e => onInputChange(e)}
          value={search}
          name="search"
          label={blogsHolderSearch}
          type="text"
        />
      </BlogsHolderInputBarContainer>
      <CollectionHolder
        lang={lang}
        title={blogsHolderTitle}
        refresher={1}
        cb={() => {}}
      >
        <CollectionForHolder
          isLoading={false}
          dataCollection={[
            { name: "test", _id: "123" },
            { name: "test", _id: "213" },
            { name: "test", _id: "321" }
          ]}
        >
          <div>Singular Blog Post</div>
        </CollectionForHolder>
      </CollectionHolder>
    </BlogsHolderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage
});

export default withRouter(connect(mapStateToProps)(BlogsHolder));
