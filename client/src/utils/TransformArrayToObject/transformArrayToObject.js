const transformArrayToObject = arr => {
  let map = {};
  arr.forEach(obj => {
    map[obj._id] = obj;
  });
  return map;
};

// const transformArrayToObject = arr =>
//   arr.reduce((acc, obj) => ((acc[obj._id] = obj), acc), {});

export default transformArrayToObject;
