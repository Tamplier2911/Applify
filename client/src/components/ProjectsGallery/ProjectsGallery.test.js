import React from "react";
import toJson from "enzyme-to-json";

// projects
import projectsData from "../../redux/projects/projectsConstants";

// component
import ProjectsGallery from "./ProjectsGallery";

// utils
import {
  setShallowC,
  findByTestAttr,
  storeFactory,
} from "../../tests/testUtils";

describe("<ProjectsGallery />", () => {
  const initialState = {
    lang: {
      languagePanelHidden: true,
      currentLanguage: "eng",
    },
    projects: projectsData,
  };
  const store = storeFactory(initialState);

  let wrapper;
  beforeEach(() => {
    wrapper = setShallowC(<ProjectsGallery store={store} />);
  });

  it("renders without an error", () => {
    const projectsGallery = findByTestAttr(wrapper, "projects-gallery");
    expect(projectsGallery).toHaveLength(1);
  });

  it("renders children - project image", () => {
    const projectsGalleryImage = findByTestAttr(
      wrapper,
      "projects-gallery-image"
    );
    expect(projectsGalleryImage).toHaveLength(1);
  });

  it("selects next image on setCurrentImageNext", () => {
    const projectsGalleryNextBtn = findByTestAttr(
      wrapper,
      "projects-gallery-next-btn"
    );
    // ensure button mounted
    expect(projectsGalleryNextBtn).toHaveLength(1);
    // grab current state
    const oldState = store.getState();
    // assert to have expected state
    expect(oldState.projects.currentImage.id).toBe(100);
    // simulate btn click
    projectsGalleryNextBtn.simulate("click");
    // grab new state
    const newState = store.getState();
    // assert new state to be expected state
    expect(newState.projects.currentImage.id).toBe(101);
  });

  it("selects previous image on setCurrentImagePrev", () => {
    const projectsGalleryPrevBtn = findByTestAttr(
      wrapper,
      "projects-gallery-prev-btn"
    );
    // ensure btn mounted
    expect(projectsGalleryPrevBtn).toHaveLength(1);
    // grab current state
    const oldState = store.getState();
    // assert to have expected state
    expect(oldState.projects.currentImage.id).toBe(101);
    // simulate btn click
    projectsGalleryPrevBtn.simulate("click");
    // get new state
    const newState = store.getState();
    // assert new state to be expected
    expect(newState.projects.currentImage.id).toBe(100);
  });

  it("matches snapshot", () => {
    const projectsGallery = findByTestAttr(wrapper, "projects-gallery");
    expect(toJson(projectsGallery)).toMatchSnapshot();
  });
});
