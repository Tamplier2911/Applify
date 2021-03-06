import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export const ProfilePortraitContainer = styled(ScrollAnimation)`
  display: grid;
  box-shadow: 0 0.1rem 0.5rem var(--cl-font);
  padding: 2rem;
  grid-row-gap: 2rem;
`;

export const ProfilePortraitWrapper = styled.div`
  justify-self: center;
  align-self: center;

  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  box-shadow: 0rem 0rem 1.2rem var(--cl-primary);
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: 14rem;
    height: 14rem;
    // border-radius: 0%;
  }
`;

export const ProfilePortraitImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
