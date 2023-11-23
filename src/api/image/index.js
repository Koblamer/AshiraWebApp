import axios from "../../config/axios";

export const uploadImage = async (payload) => {
  const url = `/image/upload`;
  const res = await axios.post(url, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res?.data;
};
