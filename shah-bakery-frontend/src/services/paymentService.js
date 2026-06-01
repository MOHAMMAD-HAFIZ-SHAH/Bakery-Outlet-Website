import api from "./api";

export const createPayment = async(data) => {
  return api.post("/payments", data);
};