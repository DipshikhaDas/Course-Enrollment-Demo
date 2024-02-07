import axios from "axios";
import { BASE_URL } from "./BaseUrl";

const authInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000
});

authInstance.interceptors.request.use(
  function (config) {
    const authToken = localStorage.getItem("accessToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default authInstance;
