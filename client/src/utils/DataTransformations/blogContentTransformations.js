const formUp = (str, replacer) => {
  const container = [];
  let arr = str.replace(/[#$~'"*]/g, "").split(replacer);
  // let arr = str.replace(/[&\/\\#+()$~'":*?<>{}]/g, "").split(replacer);
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].startsWith("%") && arr[i][0] !== " ") {
      container.push(arr[i]);
    }
  }
  return container.filter((el) => el !== "");
};

const formBlogpostData = (str) => {
  // remove return signs
  str = str.replace(/\r?\n|\r/g, "");

  // %BLOCK% - building block
  // %H% - headers
  // %P% - paragraph
  // %A% - links
  // %L% - list item
  // %CODE% - code
  const headerSet = formUp(str, "%H%");
  const paragraphSet = formUp(str, "%P%");
  const linkSet = formUp(str, "%A%");
  const listItemSet = formUp(str, "%L%");
  const codeSet = formUp(str, "%CODE%");

  const dataObject = { headerSet, paragraphSet, linkSet, listItemSet, codeSet };

  return dataObject;
};

const parseBlogData = (content = "") => {
  const blocks = {};

  content
    .replace(/\r?\n|\r/g, " ")
    .split("%BLOCK%")
    .filter((el) => el !== "" && el !== " " && el !== "  ")
    .forEach((str, i) => (blocks[i] = str));

  const arrayOfFormatedBlocks = [];

  Object.values(blocks).forEach((string) => {
    const data = formBlogpostData(string);
    arrayOfFormatedBlocks.push(data);
  });

  return arrayOfFormatedBlocks.filter(
    (obj) =>
      obj.headerSet.length ||
      obj.paragraphSet.length ||
      obj.linkSet.length ||
      obj.listItemSet.length ||
      obj.codeSet.length
  );

  // return arrayOfFormatedBlocks;
};

export default parseBlogData;
