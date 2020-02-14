import "./Projects.scss";
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

// in styled component I will just pass prop of active
// if true - render orange bgcolor else grey
// paragraphs will recive color to display, as well as button and
// circles

// another idea - depends on current project in state
// either check if its id === to id 1 2 3 or 4 and add active if so
// either add null

const Projects = ({
  currentProject,
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
  }, []);

  return (
    <div className="projects">
      <h2 className="projects__title">Latest projects:</h2>
      <div className="projects__circles">
        <div
          onClick={setCurrentProjectFirst}
          className={`projects__circles--1 ${
            currentProject.id === 0 ? "bullet-active-0" : null
          }`}
        ></div>
        <div
          onClick={setCurrentProjectSecond}
          className={`projects__circles--2 ${
            currentProject.id === 1 ? "bullet-active-1" : null
          }`}
        ></div>
        <div
          onClick={setCurrentProjectThird}
          className={`projects__circles--3 ${
            currentProject.id === 2 ? "bullet-active-2" : null
          }`}
        ></div>
        <div
          onClick={setCurrentProjectFourth}
          className={`projects__circles--4 ${
            currentProject.id === 3 ? "bullet-active-3" : null
          }`}
        ></div>
      </div>
      <div className="projects__imageContainer">
        <img
          src={`${currentProject.image}`}
          alt="Project presentation."
          className="projects__image"
        ></img>
      </div>
      <div className="projects__box">
        <div className="projects__content">
          <h3 className="projects__content--title">{currentProject.name}</h3>
          <div className="projects__content--description">
            <span style={{ color: currentProject.color }}>Description:</span>
            <div>{currentProject.description}</div>
          </div>
          <div className="projects__content--description">
            <span style={{ color: currentProject.color }}>
              Technology Stack:
            </span>
            <div>{currentProject.techStack}</div>
          </div>
          <div className="projects__content--bottom">
            <div className="projects__content--date">
              {currentProject.date.toLocaleString("en-us", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </div>
            <a
              href={`${currentProject.url}`}
              className={`projects__content--link bullet-active-${currentProject.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
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
