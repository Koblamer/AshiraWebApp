import axios from "../../config/axios";

export const addOrder = async (payload) => {
  const url = `/order/add`;
  const res = await axios.post(url, payload);
  return res?.data;
};

export const searchOrderByNumber = async (orderNumber) => {
  const url = `/order/search/${orderNumber}`;
  const res = await axios.get(url);
  return res?.data;
};
