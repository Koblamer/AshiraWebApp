import axios from "../../config/axios";

export const uploadSlipPayment = async (payload) => {
  const url = `/payment/uploadSlip`;
  const res = await axios.post(url, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res?.data;
};
