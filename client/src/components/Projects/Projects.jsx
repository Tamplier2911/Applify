// import "./Projects.scss";
import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectNext,
  getCurrentProject
  // setCurrentProjectPrev
} from "../../redux/projects/projects.actions";
import { selectCurrentProject } from "../../redux/projects/projects.selectors";
import { selectCurrentLanguage } from "../../redux/lang/lang.selectors";

// projects constants
import { projectsHeaders } from "../../utils/ComponentProjectsConstants/componentProjectsConstants";

// JS Rendering CSS
import {
  ProjectsContainer,
  ProjecstTitle,
  ProjectsCircles,
  ProjectsCircleZero,
  ProjectsCircleOne,
  ProjectsCircleTwo,
  ProjectsCircleThree,
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
  ProjectsContentLink
} from "./ProjectsStyles";

const Projects = ({
  currentProject: { id, name, image, color, description, techStack, date, url },
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectNext,
  getCurrentProject,
  lang
  // setCurrentProjectPrev
}) => {
  useEffect(() => {
    getCurrentProject(lang);
    const slider = setInterval(() => {
      setCurrentProjectNext(lang);
    }, 15000);
    return () => clearInterval(slider);
  }, [setCurrentProjectNext, getCurrentProject, lang]);

  const {
    projectsHeader,
    projectsDescription,
    projectsTechStack,
    projectsVisit
  } = projectsHeaders[lang];

  date = date
    ? date.toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })
    : undefined;

  return (
    <ProjectsContainer>
      <ProjecstTitle>{projectsHeader}</ProjecstTitle>
      <ProjectsCircles>
        <ProjectsCircleZero
          onClick={() => setCurrentProjectFirst(lang)}
          id={id}
        />
        <ProjectsCircleOne
          onClick={() => setCurrentProjectSecond(lang)}
          id={id}
        />
        <ProjectsCircleTwo
          onClick={() => setCurrentProjectThird(lang)}
          id={id}
        />
        <ProjectsCircleThree
          onClick={() => setCurrentProjectFourth(lang)}
          id={id}
        />
      </ProjectsCircles>
      <ProjectsImageWrapper>
        <ProjectsImage src={`${image}`} alt="Project presentation slide." />
      </ProjectsImageWrapper>
      <ProjectsBox>
        <ProjectsContent>
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
    lang: selectCurrentLanguage
  });

export default connect(mapStateToProps, {
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectNext,
  getCurrentProject
  // setCurrentProjectPrev
})(Projects);
