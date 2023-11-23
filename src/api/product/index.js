import axios from "../../config/axios";

export const addProduct = async (payload) => {
  const url = `/product/add`;
  const res = await axios.post(url, payload);
  return res?.data;
};
export const updateProduct = async (id, payload) => {
  const url = `/product/${id}`;
  const res = await axios.patch(url, payload);
  return res?.data;
};
export const deleteProduct = async (id) => {
  const url = `/product/${id}`;
  const res = await axios.delete(url);
  return res?.data;
};

export const getAllProduct = async (payload) => {
  const url = `/product?department=allproducts`;
  const res = await axios.get(url, payload);
  return res?.data;
};

export const getProductById = async (id) => {
  const url = `/product/${id}`;
  const res = await axios.get(url);
  return res?.data;
};
