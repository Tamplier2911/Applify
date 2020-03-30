import styled from "styled-components";

import { ReactComponent as HeartSVG } from "../../assets/svg/heart.svg";

const getBlogBg = props => {
  const { img } = props;
  return `background: center / cover no-repeat url(${img});`;
};

export const BlogUpdateContainer = styled.div`
  display: grid;
  grid-row-gap: 2rem;
  margin-bottom: 5rem;
`;

export const BlogUpdateData = styled.div`
  ${getBlogBg}
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-column-gap: 2rem;

  @media only screen and (max-width: 360px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0rem;
    grid-row-gap: 1rem;
  }
`;

export const BlogUpdateAuthor = styled.div`
  background-color: var(--cl-white);
  display: grid;
  grid-template-columns: 1fr min-content;

  margin: 2rem 2rem 2rem 0rem;
  padding: 2rem;
  align-items: center;
  font-size: 1.8rem;
  order: 2;

  @media only screen and (max-width: 360px) {
    margin: 0rem 1rem 1rem 1rem;
  }

  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
    text-align: center;
    grid-row-gap: 1rem;
  }
`;

export const BlogUpdateCredit = styled.div`
  display: grid;
`;

export const BlogUpdateName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BlogUpdateDate = styled.div``;

export const BlogUpdateImgWrap = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0rem 0rem 0.8rem var(--cl-primary);

  @media only screen and (max-width: 300px) {
    justify-self: center;
  }
`;

export const BlogUpdateImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const BlogUpdateLikes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  order: 1;
  background-color: var(--cl-white);
  margin: 2rem 0rem 2rem 2rem;
  padding: 2rem;
  font-size: 1.8rem;

  @media only screen and (max-width: 360px) {
    margin: 1rem 1rem 0rem 1rem;
  }
`;

export const BlogUpdateLikesCount = styled.div``;

export const BlogUpdateSVGWrap = styled.div``;

export const BlogUpdateSVG = styled(HeartSVG)`
  height: 1.8rem;
  width: 1.8rem;
  fill: var(--cl-font);
`;

export const BlogUpdateNotFound = styled.div`
  font-family: var(--font-title);
  line-height: 1;
  font-size: 4rem;
  font-weight: 300;
`;
