import axios from "axios";

export const fetchAllUsers = async (method, url) => {
  const res = await axios({ method, url });
  return res.data.data.data;
};

export default {
  fetchAllUsers,
};
