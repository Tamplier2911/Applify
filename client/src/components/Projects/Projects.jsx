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
  setCurrentProjectNext
  // setCurrentProjectPrev
} from "../../redux/projects/projects.actions";
import { selectCurrentProject } from "../../redux/projects/projects.selectors";

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
  setCurrentProjectNext
  // setCurrentProjectPrev
}) => {
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentProjectNext();
    }, 15000);
    return () => clearInterval(slider);
  }, [setCurrentProjectNext]);

  date = date.toLocaleString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <ProjectsContainer>
      <ProjecstTitle>Latest projects:</ProjecstTitle>
      <ProjectsCircles>
        <ProjectsCircleZero onClick={setCurrentProjectFirst} id={id} />
        <ProjectsCircleOne onClick={setCurrentProjectSecond} id={id} />
        <ProjectsCircleTwo onClick={setCurrentProjectThird} id={id} />
        <ProjectsCircleThree onClick={setCurrentProjectFourth} id={id} />
      </ProjectsCircles>
      <ProjectsImageWrapper>
        <ProjectsImage src={`${image}`} alt="Project presentation slide." />
      </ProjectsImageWrapper>
      <ProjectsBox>
        <ProjectsContent>
          <ProjectsContentTitle>{name}</ProjectsContentTitle>
          <ProjectsContentDesc>
            <ProjectsContentDescTitle color={color}>
              Description:
            </ProjectsContentDescTitle>
            <ProjectsContentDescText>{description}</ProjectsContentDescText>
          </ProjectsContentDesc>
          <ProjectsContentDesc>
            <ProjectsContentDescTitle color={color}>
              Technology Stack:
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
              Visit
            </ProjectsContentLink>
          </ProjectsContentBottom>
        </ProjectsContent>
      </ProjectsBox>
    </ProjectsContainer>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    currentProject: selectCurrentProject
  });

export default connect(mapStateToProps, {
  setCurrentProjectFirst,
  setCurrentProjectSecond,
  setCurrentProjectThird,
  setCurrentProjectFourth,
  setCurrentProjectNext
  // setCurrentProjectPrev
})(Projects);
