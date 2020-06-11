import styled, { css } from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

/*

// before projects animation was faked using this mechanic:
// new projects pops in every 15 second via set interval
// this animation runs 15 second 0-20% fade in 20-100% resting state. 
const projectsAnimation = css`
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    4% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

*/

const getThemeColorForLink = (props) => {
  const { theme } = props;
  if (theme === "dark") {
    return `color: var(--cl-font);`;
  } else {
    return `color: var(--cl-white);`;
  }
};

const fadeInProject = (props) => {
  const { load } = props;
  if (!load) {
    return `opacity: 0;`;
  } else if (load) {
    return `
        opacity: 1;
        transition: opacity 1s ease-in;
      `;
  }
};

const circlesSharedStyle = css`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition: background-color 0.3s;
`;

const getLinkColor = (props) => {
  return props.color ? `${props.color}` : `var(--cl-tiles-2)`;
};

const getTitleColors = (props) => {
  return props.color ? `${props.color}` : `var(--cl-tiles-2)`;
};

const getCircleColorZero = (props) => {
  return props.id === 0 ? "var(--cl-circle-0)" : "var(--cl-circle-transit)";
};
const getCircleColorOne = (props) => {
  return props.id === 1 ? "var(--cl-circle-1)" : "var(--cl-circle-transit)";
};
const getCircleColorTwo = (props) => {
  return props.id === 2 ? "var(--cl-cirlce-2)" : "var(--cl-circle-transit)";
};
const getCircleColorThree = (props) => {
  return props.id === 3 ? "var(--cl-circle-3)" : "var(--cl-circle-transit)";
};

const getCircleColorFour = (props) => {
  return props.id === 4 ? "var(--cl-circle-4)" : "var(--cl-circle-transit)";
};

export const ProjectsContainer = styled(ScrollAnimation)`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, min-content);
  padding: 1rem;
`;

export const ProjecstTitle = styled.h2`
  grid-area: 1 / 1 / 2 / -1;
  font-family: var(--font-title);
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem;
`;

export const ProjectsCircles = styled.div`
  grid-area: 2 / 6 / 3 / 9;
  display: grid;
  grid-template-columns: repeat(5, min-content);
  justify-content: end;
  grid-column-gap: 3rem;
  padding: 2rem;

  @media only screen and (max-width: 720px) {
    margin-top: 2rem;
    grid-area: 20 / 3 / 21 / 9;
    justify-content: center;
    grid-column-gap: 4rem;
  }

  @media only screen and (max-width: 425px) {
    grid-column-gap: 3rem;
  }
`;

export const ProjectsCircleZero = styled.div`
  ${circlesSharedStyle}
  background-color: ${getCircleColorZero};

  @media (hover: none) {
    &:hover {
      background-color: ${getCircleColorZero};
    }
  }
`;

export const ProjectsCircleOne = styled.div`
  ${circlesSharedStyle}
  background-color: ${getCircleColorOne};

  @media (hover: none) {
    &:hover {
      background-color: ${getCircleColorOne};
    }
  }
`;

export const ProjectsCircleTwo = styled.div`
  ${circlesSharedStyle}
  background-color: ${getCircleColorTwo};

  @media (hover: none) {
    &:hover {
      background-color: ${getCircleColorTwo};
    }
  }
`;

export const ProjectsCircleThree = styled.div`
  ${circlesSharedStyle}
  background-color: ${getCircleColorThree};

  @media (hover: none) {
    &:hover {
      background-color: ${getCircleColorThree};
    }
  }
`;

export const ProjectsCirclFour = styled.div`
  ${circlesSharedStyle}
  background-color: ${getCircleColorFour};

  @media (hover: none) {
    &:hover {
      background-color: ${getCircleColorFour};
    }
  }
`;

// ${projectsAnimation}
export const ProjectsImageWrapper = styled.div`
  position: relative;
  z-index: 5;

  grid-area: 2 / 2 / 8 / 5;

  box-shadow: 0 0.2rem 0.5rem var(--cl-square-shadow);
  animation: fadein 15s infinite;

  @media only screen and (max-width: 720px) {
    grid-area: 2 / 2 / 10 / 10;
  }

  ${fadeInProject}
`;

export const ProjectsImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const ProjectsBox = styled.div`
  position: relative;
  grid-area: 3 / 3 / 10 / 10;
  display: grid;
  grid-template-columns: 3fr 7.5fr;

  background-color: var(--cl-grey);
  box-shadow: 0 0.2rem 1rem var(--cl-square-shadow);

  padding: 2rem;
  height: 40rem;

  @media only screen and (max-width: 768px) {
    height: 44rem;
  }

  @media only screen and (max-width: 720px) {
    grid-area: 7 / 1 / 20 / 11;
    z-index: 10;
  }

  @media only screen and (max-width: 310px) {
    height: 50rem;
  }

  @media only screen and (max-width: 254px) {
    height: 60rem;
  }
`;

// ${projectsAnimation}
export const ProjectsContent = styled.div`
  grid-column: 2 / 3;
  display: grid;
  grid-row-gap: 2rem;

  padding: 1rem;

  animation: fadein 15s infinite;

  @media only screen and (max-width: 720px) {
    grid-column: 1 / 3;
  }

  @media only screen and (max-width: 310px) {
    grid-row-gap: 1rem;
  }

  ${fadeInProject}
`;

export const ProjectsContentTitle = styled.h3`
  font-size: 2rem;
`;

export const ProjectsContentDesc = styled.div``;

export const ProjectsContentDescTitle = styled.span`
  font-weight: bold;
  color: ${getTitleColors};
`;

export const ProjectsContentDescText = styled.div``;

export const ProjectsContentBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;

  @media only screen and (max-width: 254px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectsContentDate = styled.div``;

export const ProjectsContentLink = styled.a`
  background-color: ${getLinkColor};
  ${getThemeColorForLink}
  padding: 0.5rem 5rem;
  font-family: var(--font-title);
  text-decoration: none;
  text-align: center;

  transition: 0.3s background-color;

  &:hover {
    background-color: var(--cl-mainhover);
  }

  @media (hover: none) {
    &:hover {
      background-color: ${getLinkColor};
    }
  }
`;
