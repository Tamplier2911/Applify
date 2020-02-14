import { createSelector } from "reselect";

const selectProjects = state => state.projects;

export const selectAllProjects = createSelector(
  [selectProjects],
  projects => projects.allProjects
);

export const selectCurrentProject = createSelector(
  [selectProjects],
  projects => projects.currentProject
);
