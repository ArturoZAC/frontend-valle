import axios from "axios";
import { getEnvs } from "../../../helper/getEnvs";

const { VITE_API_URL } = getEnvs();

const productApi = axios.create({
  baseURL: `${VITE_API_URL}/products`,
});

productApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export { productApi };
