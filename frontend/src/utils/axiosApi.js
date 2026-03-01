import axios from "axios";

const backendUrl =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_SERVER
    : import.meta.env.VITE_BACKEND;

export const axiosApi = axios.create({
  baseURL: backendUrl,
});
