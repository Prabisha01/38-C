import axios from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = (data) => {
  return Api.post("/api/create", data);
};

export const LoginUser = (data) => {
  return Api.post("/api/login", data);
};
