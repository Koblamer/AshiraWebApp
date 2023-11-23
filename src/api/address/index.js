import axios from "../../config/axios";

export const addAddress = async (payload) => {
  const url = `/address/add`;
  const res = await axios.post(url, payload);
  return res?.data;
};
