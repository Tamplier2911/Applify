import React from "react";
import toJson from "enzyme-to-json";

// component
import PortfolioPage from "./PortfolioPage";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<PortfolioPage />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<PortfolioPage />);
  });

  it("renders without error", () => {
    const portfolioPage = findByTestAttr(wrapper, "portfolio-page");
    expect(portfolioPage.length).toBe(1);
  });

  it("renders childrens", () => {
    const projects = findByTestAttr(wrapper, "portfolio-page-projects");
    expect(projects.length).toBe(1);

    const gallery = findByTestAttr(wrapper, "portfolio-page-gallery");
    expect(gallery.length).toBe(1);
  });

  it("matches snapshot", () => {
    const portfolioPage = findByTestAttr(wrapper, "porfolio-page");
    expect(toJson(portfolioPage)).toMatchSnapshot();
  });
});
