import React from "react";

// component
import PortfolioPage from "./PortfolioPage";

// utils
import { setShallow, findByTestAttr } from "../../tests/testUtils";

describe("<PortfolioPage />", () => {
  it("renders without error", () => {
    const wrapper = setShallow(<PortfolioPage />);
    const portfolioPage = findByTestAttr(wrapper, "portfolio-page");
    expect(portfolioPage.length).toBe(1);
  });

  it("renders childrens", () => {
    const wrapper = setShallow(<PortfolioPage />);

    const projects = findByTestAttr(wrapper, "portfolio-page-projects");
    expect(projects.length).toBe(1);

    const gallery = findByTestAttr(wrapper, "portfolio-page-gallery");
    expect(gallery.length).toBe(1);
  });

  it("matches snapshot", () => {
    const wrapper = setShallow(<PortfolioPage />);
    const portfolioPage = findByTestAttr(wrapper, "porfolio-page");
    expect(portfolioPage).toMatchSnapshot();
  });
});
