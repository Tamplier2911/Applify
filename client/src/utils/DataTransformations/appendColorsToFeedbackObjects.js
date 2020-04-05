const appendColorsToFeedbackObjects = (array, theme = "light") => {
  const modifiedArray = [...array];
  let colors = ["#1a73e8", "#fe3f2d", "#00a8a9", "#ffaa2d"];
  let colorsDark = ["#55c57a", "#55c57a", "#55c57a", "#55c57a"];
  modifiedArray.forEach((obj) => {
    if (colors.length === 0) {
      colors = ["#1a73e8", "#fe3f2d", "#00a8a9", "#ffaa2d"];
      colorsDark = ["#55c57a", "#55c57a", "#55c57a", "#55c57a"];
    }
    obj.color = theme === "dark" ? colorsDark.pop() : colors.pop();
  });
  return modifiedArray;
};

export default appendColorsToFeedbackObjects;
