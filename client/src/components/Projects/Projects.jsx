// import "./Projects.scss";
import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectFifth,
  setCurrentProjectNext,
  getCurrentProject,
  // setCurrentProjectPrev
} from "../../redux/projects/projects.actions";
import { selectCurrentProject } from "../../redux/projects/projects.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";
import { selectCurrentTheme } from "../../redux/theme/theme.selectors";

// projects constants
import projectsHeaders from "./ProjectsConstants";

// JS Rendering CSS
import {
  ProjectsContainer,
  ProjecstTitle,
  ProjectsCircles,
  ProjectsCircleZero,
  ProjectsCircleOne,
  ProjectsCircleTwo,
  ProjectsCircleThree,
  ProjectsCirclFour,
  ProjectsImageWrapper,
  ProjectsImage,
  ProjectsBox,
  ProjectsContent,
  ProjectsContentTitle,
  ProjectsContentDesc,
  ProjectsContentDescTitle,
  ProjectsContentDescText,
  ProjectsContentBottom,
  ProjectsContentDate,
  ProjectsContentLink,
} from "./ProjectsStyles";

const Projects = ({
  currentProject: { id, name, image, color, description, techStack, date, url },
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectFifth,
  setCurrentProjectNext,
  getCurrentProject,
  lang,
  theme,
  // setCurrentProjectPrev
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // invoke this code only once to init current project
    if (!id) {
      getCurrentProject(lang);
    }

    if (id === 1) setCurrentProjectSecond(lang);
    if (id === 2) setCurrentProjectThird(lang);
    if (id === 3) setCurrentProjectFourth(lang);
    if (id === 4) setCurrentProjectFifth(lang);

    // animation state
    setIsLoaded(false);
    setTimeout(() => {
      setIsLoaded(true);
    }, 600);
    // 400 ?

    // slider functionality
    const slider = setInterval(() => {
      setCurrentProjectNext(lang);
    }, 20000);
    return () => clearInterval(slider);
  }, [
    setCurrentProjectNext,
    setCurrentProjectSecond,
    setCurrentProjectThird,
    setCurrentProjectFourth,
    setCurrentProjectFifth,
    getCurrentProject,
    lang,
    id,
  ]);

  const {
    projectsHeader,
    projectsDescription,
    projectsTechStack,
    projectsVisit,
  } = projectsHeaders[lang];

  date = date
    ? date.toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : undefined;

  return (
    <ProjectsContainer
      data-test="projects"
      animateIn={"bounceInRight"}
      animateOnce={true}
    >
      <ProjecstTitle>{projectsHeader}</ProjecstTitle>
      <ProjectsCircles>
        <ProjectsCircleZero
          data-test="projects-set-first"
          onClick={() => setCurrentProjectFirst(lang)}
          id={id}
        />
        <ProjectsCircleOne
          data-test="projects-set-second"
          onClick={() => setCurrentProjectSecond(lang)}
          id={id}
        />
        <ProjectsCircleTwo
          data-test="projects-set-third"
          onClick={() => setCurrentProjectThird(lang)}
          id={id}
        />
        <ProjectsCircleThree
          data-test="projects-set-fourth"
          onClick={() => setCurrentProjectFourth(lang)}
          id={id}
        />
        <ProjectsCirclFour
          data-test="projects-set-fifth"
          onClick={() => setCurrentProjectFifth(lang)}
          id={id}
        />
      </ProjectsCircles>
      <ProjectsImageWrapper load={isLoaded}>
        <ProjectsImage src={`${image}`} alt="Project presentation slide." />
      </ProjectsImageWrapper>
      <ProjectsBox data-test="projects-box">
        <ProjectsContent load={isLoaded}>
          <ProjectsContentTitle>{name}</ProjectsContentTitle>
          <ProjectsContentDesc>
            <ProjectsContentDescTitle color={color}>
              {projectsDescription}
            </ProjectsContentDescTitle>
            <ProjectsContentDescText>{description}</ProjectsContentDescText>
          </ProjectsContentDesc>
          <ProjectsContentDesc>
            <ProjectsContentDescTitle color={color}>
              {projectsTechStack}
            </ProjectsContentDescTitle>
            <ProjectsContentDescText>{techStack}</ProjectsContentDescText>
          </ProjectsContentDesc>
          <ProjectsContentBottom>
            <ProjectsContentDate>{date}</ProjectsContentDate>
            <ProjectsContentLink
              href={`${url}`}
              color={color}
              theme={theme}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projectsVisit}
            </ProjectsContentLink>
          </ProjectsContentBottom>
        </ProjectsContent>
      </ProjectsBox>
    </ProjectsContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentProject: selectCurrentProject,
    lang: selectCurrentLanguage,
    theme: selectCurrentTheme,
  });

export default connect(mapStateToProps, {
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectFifth,
  setCurrentProjectNext,
  getCurrentProject,
  // setCurrentProjectPrev
})(Projects);
