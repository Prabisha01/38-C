import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createUser = (data) => {
  return Api.post("/api/create", data);
};

export const LoginUser = (data) => {
  return Api.post("/api/login", data);
};

export const getAllUser = (search = "") => {
  return Api.get("/api/getAll", {
    params: { search },
  });
};

export const getUserById = (id) => {
  return Api.get(`/api/getById/${id}`);
};

export const updateById = (id, data) => {
  return Api.put(`/api/updateById/${id}`, data);
};

export const deleteById = (id) => {
  return Api.delete(`/api/deleteById/${id}`);
};
