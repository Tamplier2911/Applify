import styled, { css } from "styled-components";

const imageStandartStyles = css`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const blogFadeIn = css`
  @keyframes blogFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const BlogPostContainer = styled.section`
  ${blogFadeIn}
  display: grid;
  grid-row-gap: 10rem;
  margin-bottom: 4rem;
  animation: 1s blogFadeIn;

  @media only screen and (max-width: 768px) {
    grid-row-gap: 5rem;
  }
`;

export const BlogPostHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BlogPostTitle = styled.h1`
  display: grid;
  align-items: center;
  font-size: 4rem;
  font-weight: 400;
  padding: 1rem;

  @media only screen and (max-width: 768px) {
    font-size: 3.5rem;
    text-align: center;
  }
`;

export const BlogPostAuthor = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  padding: 1rem;
  width: 25rem;

  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const BlogPostAuthorImgCont = styled.div`
  grid-row: 1 / -1;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  align-self: center;
`;

export const BlogPostAuthorImg = styled.img`
  ${imageStandartStyles}
`;

export const BlogPostAuthorName = styled.div`
  align-self: end;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BlogPostDate = styled.div`
  align-self: start;
`;

export const BlogPostImgCont = styled.div`
  height: 50rem;

  @media only screen and (max-width: 768px) {
    height: 30rem;
  }
`;

export const BlogPostImg = styled.img`
  ${imageStandartStyles}
`;

export const BlogPostContent = styled.div`
  display: grid;
  grid-row-gap: 4rem;

  @media only screen and (max-width: 768px) {
    grid-row-gap: 2rem;
  }
`;

export const BlogPostContentTitle = styled.div`
  justify-self: center;
  font-size: 2.7rem;
  font-weight: 400;
`;

export const BlogPostContentParagraph = styled.div`
  font-size: 2rem;
`;
