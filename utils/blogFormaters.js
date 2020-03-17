const formUp = (str, replacer) => {
  const container = [];
  let arr = str.replace(/[&\/\\#+()$~'":*?<>{}]/g, "").split(replacer);
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].startsWith("%") && arr[i][0] !== " ") {
      container.push(arr[i]);
    }
  }
  return container.filter(el => el !== "");
};

exports.formBlogpostData = str => {
  // %HEADER% - headers
  // %CONTENT% - content
  // %LINK% - links
  // %IMAEGE% - image
  const titleSet = formUp(str, "%HEADER%");
  const contentSet = formUp(str, "%CONTENT%");
  const linkSet = formUp(str, "%LINK%");
  const imageSet = formUp(str, "%IMAGE%");

  const dataObject = { titleSet, contentSet, linkSet, imageSet };

  console.log(dataObject);
  return dataObject;
};
