// import "./BlogCreateRules.scss";
import React from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// JS Rendering CSS
import {
  BlogCreateRulesContainer,
  BlogCreateRulesTitle,
  BlogCreateRulesUl,
  BlogCreateRulesLi,
  BlogCreateRulesLiSelector,
  BlogCreateRulesLiDescriptor,
  BlogCreateRulesCode,
  BlogCreateRulesSection,
  BlogCreateRulesCodeSelector,
  BlogCreateRulesCodeSample,
} from "./BlogCreateRulesStyles";

// component constants
import blogCreateRulesData from "./BlogCreateRulesConstants";

const BlogCreateRules = ({ lang }) => {
  const {
    blogRulesTitles,
    blogRulesSelectors,
    blogRulesDescriptors,
    blogRulesCode,
  } = blogCreateRulesData[lang];
  return (
    <BlogCreateRulesContainer data-test="blog-create-rules">
      <BlogCreateRulesTitle>{blogRulesTitles[0]}</BlogCreateRulesTitle>
      <BlogCreateRulesUl>
        <BlogCreateRulesLi>
          <BlogCreateRulesLiSelector>
            {blogRulesSelectors[0]}
          </BlogCreateRulesLiSelector>
          <BlogCreateRulesLiDescriptor>
            {blogRulesDescriptors[0]}
          </BlogCreateRulesLiDescriptor>
        </BlogCreateRulesLi>
        <BlogCreateRulesLi>
          <BlogCreateRulesLiSelector>
            {blogRulesSelectors[1]}
          </BlogCreateRulesLiSelector>
          <BlogCreateRulesLiDescriptor>
            {blogRulesDescriptors[1]}
          </BlogCreateRulesLiDescriptor>
        </BlogCreateRulesLi>
        <BlogCreateRulesLi>
          <BlogCreateRulesLiSelector>
            {blogRulesSelectors[2]}
          </BlogCreateRulesLiSelector>
          <BlogCreateRulesLiDescriptor>
            {blogRulesDescriptors[2]}
          </BlogCreateRulesLiDescriptor>
        </BlogCreateRulesLi>
        <BlogCreateRulesLi>
          <BlogCreateRulesLiSelector>
            {blogRulesSelectors[3]}
          </BlogCreateRulesLiSelector>
          <BlogCreateRulesLiDescriptor>
            {blogRulesDescriptors[3]}
          </BlogCreateRulesLiDescriptor>
        </BlogCreateRulesLi>
        <BlogCreateRulesLi>
          <BlogCreateRulesLiSelector>
            {blogRulesSelectors[4]}
          </BlogCreateRulesLiSelector>
          <BlogCreateRulesLiDescriptor>
            {blogRulesDescriptors[4]}
          </BlogCreateRulesLiDescriptor>
        </BlogCreateRulesLi>
        <BlogCreateRulesLi>
          <BlogCreateRulesLiSelector>
            {blogRulesSelectors[5]}
          </BlogCreateRulesLiSelector>
          <BlogCreateRulesLiDescriptor>
            {blogRulesDescriptors[5]}
          </BlogCreateRulesLiDescriptor>
        </BlogCreateRulesLi>
      </BlogCreateRulesUl>
      <BlogCreateRulesTitle>{blogRulesTitles[1]}</BlogCreateRulesTitle>
      <BlogCreateRulesCode>
        <BlogCreateRulesSection>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[0]}
          </BlogCreateRulesCodeSelector>
        </BlogCreateRulesSection>
        <BlogCreateRulesSection>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[1]}
          </BlogCreateRulesCodeSelector>
          <BlogCreateRulesCodeSample>
            {blogRulesCode[0]}
          </BlogCreateRulesCodeSample>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[1]}
          </BlogCreateRulesCodeSelector>
        </BlogCreateRulesSection>
        <BlogCreateRulesSection>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[2]}
          </BlogCreateRulesCodeSelector>
          <BlogCreateRulesCodeSample>
            {blogRulesCode[1]}
          </BlogCreateRulesCodeSample>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[2]}
          </BlogCreateRulesCodeSelector>
        </BlogCreateRulesSection>
        <BlogCreateRulesSection>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[3]}
          </BlogCreateRulesCodeSelector>
          <BlogCreateRulesCodeSample>
            {blogRulesCode[2]}
          </BlogCreateRulesCodeSample>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[3]}
          </BlogCreateRulesCodeSelector>
        </BlogCreateRulesSection>
        <BlogCreateRulesSection>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[4]}
          </BlogCreateRulesCodeSelector>
          <BlogCreateRulesCodeSample>
            {blogRulesCode[3]}
          </BlogCreateRulesCodeSample>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[4]}
          </BlogCreateRulesCodeSelector>
        </BlogCreateRulesSection>
        <BlogCreateRulesSection>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[4]}
          </BlogCreateRulesCodeSelector>
          <BlogCreateRulesCodeSample>
            {blogRulesCode[4]}
          </BlogCreateRulesCodeSample>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[4]}
          </BlogCreateRulesCodeSelector>
        </BlogCreateRulesSection>
        <BlogCreateRulesSection>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[5]}
          </BlogCreateRulesCodeSelector>
          <BlogCreateRulesCodeSample>
            {blogRulesCode[5]}
          </BlogCreateRulesCodeSample>
          <BlogCreateRulesCodeSelector>
            {blogRulesSelectors[5]}
          </BlogCreateRulesCodeSelector>
        </BlogCreateRulesSection>
        <BlogCreateRulesCodeSelector>
          {blogRulesSelectors[0]}
        </BlogCreateRulesCodeSelector>
      </BlogCreateRulesCode>
    </BlogCreateRulesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  lang: selectCurrentLanguage,
});

export default connect(mapStateToProps)(BlogCreateRules);
