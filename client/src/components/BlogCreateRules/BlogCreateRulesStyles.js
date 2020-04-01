import styled from "styled-components";

export const BlogCreateRulesContainer = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  font-family: var(--font-title);
  padding: 1rem;
  margin-bottom: 4rem;

  background-color: var(--cl-contacts-bg);
  box-shadow: 0rem 0.1rem 0.6rem var(--cl-square-shadow);
`;

export const BlogCreateRulesTitle = styled.h3`
  font-size: 2.2rem;
  text-align: center;
  font-weight: 400;
`;

export const BlogCreateRulesUl = styled.ul`
  list-style: none;
`;

export const BlogCreateRulesLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 9fr;

  @media only screen and (max-width: 872px) {
    grid-template-columns: 1fr 8fr;
  }

  @media only screen and (max-width: 720px) {
    grid-template-columns: 1fr 5fr;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr 3fr;
  }

  @media only screen and (max-width: 310px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCreateRulesLiSelector = styled.span`
  color: var(--cl-github);
`;

export const BlogCreateRulesLiDescriptor = styled.span``;

export const BlogCreateRulesCode = styled.div`
  display: grid;
`;

export const BlogCreateRulesSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);

  @media only screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCreateRulesCodeSelector = styled.div`
  color: var(--cl-github);
`;

export const BlogCreateRulesCodeSample = styled.div`
  white-space: nowrap;

  @media only screen and (max-width: 425px) {
    white-space: unset;
  }

  @media only screen and (max-width: 245px) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
