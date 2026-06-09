import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export const createUser = (data) => {
  return Api.post("/api/create", data);
};

export const LoginUser = (data) => {
  return Api.post("/api/login", data);
};

export const getAllUser = () => {
  return Api.get("/api/getAll");
};

export const getUserById = (id) => {
  return Api.get(`/api/getById/${id}`);
};

export const updateById = (id, data) => {
  return Api.put(`/api/updateById/${id}`, data);
};
