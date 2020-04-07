const appendColorsToFeedbackObjects = (array, theme = "light") => {
  const modifiedArray = [...array];
  let colors = ["#1a73e8", "#fe3f2d", "#00a8a9", "#ffaa2d"];
  modifiedArray.forEach((obj) => {
    if (colors.length === 0) {
      colors = ["#1a73e8", "#fe3f2d", "#00a8a9", "#ffaa2d"];
    }
    obj.color = theme === "dark" ? "#55c57a" : colors.pop();
  });
  return modifiedArray;
};

export default appendColorsToFeedbackObjects;
