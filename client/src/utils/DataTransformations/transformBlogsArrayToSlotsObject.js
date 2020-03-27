export const transformBlogsArrayToSlotsObject = arr => {
  const set = {};
  let count = 1;
  let total = arr.length / 6;
  for (let i = 0; i < total; i++) {
    set[count] = arr.splice(0, 6);
    count++;
  }
  return set;
};

export default transformBlogsArrayToSlotsObject;
