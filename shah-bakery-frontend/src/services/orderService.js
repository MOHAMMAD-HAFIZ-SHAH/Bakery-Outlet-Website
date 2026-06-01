import api from "./api";

export const createOrder = async(data) => {
  return api.post("/orders", data);
};

export const getOrders = async() => {
  return api.get("/orders");
};