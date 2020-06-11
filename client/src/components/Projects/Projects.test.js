import React from "react";
import toJson from "enzyme-to-json";

// projects data
import projectsData from "../../redux/projects/projectsConstants";

// component
import Projects from "./Projects.jsx";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<Projects />", () => {
  const initialStore = {
    theme: {
      currentTheme: "light",
    },
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    projects: projectsData,
  };
  const store = storeFactory(initialStore);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<Projects store={store} />);
  });

  it("renders without an error", () => {
    const projects = findByTestAttr(wrapper, "projects");
    expect(projects).toHaveLength(1);
  });

  it("renders children - projects box", () => {
    const projectsBox = findByTestAttr(wrapper, "projects-box");
    expect(projectsBox).toHaveLength(1);
  });

  it("switches to first project on setCurrentProjectFirst", () => {
    const projectsSetFirst = findByTestAttr(wrapper, "projects-set-first");
    expect(projectsSetFirst).toHaveLength(1);

    const oldState = store.getState();
    expect(oldState.projects.currentProject).toEqual({});

    projectsSetFirst.simulate("click");
    const newState = store.getState();
    expect(newState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[0]
    );
  });

  it("switches to second project on setCurrentProjectSecond", () => {
    const projectsSetSecond = findByTestAttr(wrapper, "projects-set-second");
    expect(projectsSetSecond).toHaveLength(1);

    const oldState = store.getState();
    expect(oldState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[0]
    );

    projectsSetSecond.simulate("click");
    const newState = store.getState();
    expect(newState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[1]
    );
  });

  it("switches to third project on setCurrentProjectThird", () => {
    const projectsSetThird = findByTestAttr(wrapper, "projects-set-third");
    expect(projectsSetThird).toHaveLength(1);

    const oldState = store.getState();
    expect(oldState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[1]
    );

    projectsSetThird.simulate("click");
    const newState = store.getState();
    expect(newState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[2]
    );
  });

  it("switches to fourth project on setCurrentProjectFourth", () => {
    const projectsSetFourth = findByTestAttr(wrapper, "projects-set-fourth");
    expect(projectsSetFourth).toHaveLength(1);

    const oldState = store.getState();
    expect(oldState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[2]
    );

    projectsSetFourth.simulate("click");
    const newState = store.getState();
    expect(newState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[3]
    );
  });

  it("switches to fifth project on setCurrentProjectFifth", () => {
    const projectsSetFifth = findByTestAttr(wrapper, "projects-set-fifth");
    expect(projectsSetFifth).toHaveLength(1);

    const oldState = store.getState();
    expect(oldState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[3]
    );

    projectsSetFifth.simulate("click");

    const newState = store.getState();
    expect(newState.projects.currentProject).toEqual(
      projectsData.allProjects.eng[4]
    );
  });

  it("matches snapshot", () => {
    // renders projectsData.allProjects.eng[3]
    // current project after last simulation
    const projects = findByTestAttr(wrapper, "projects");
    expect(toJson(projects)).toMatchSnapshot();
  });
});
