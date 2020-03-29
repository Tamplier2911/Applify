const likeDislikeLocally = (state, payload, like = true) => {
  const { allSets, currentSet } = state;
  const { slot, index } = payload;

  // blog
  const blog = allSets[slot][index];
  like ? blog.likes++ : blog.likes--;
  // console.log(blog);

  // set
  const set = [...currentSet];
  set[index] = blog;
  // console.log(set);

  // all sets
  const sets = { ...allSets };
  sets[slot] = set;
  // console.log(sets);

  return { set, sets };
};

export default likeDislikeLocally;
