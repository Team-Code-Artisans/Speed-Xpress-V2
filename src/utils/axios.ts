import { getLogOutFunction } from "@/hooks/useAuth";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  withCredentials: true,
});

api.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // const originalRequest = error.config;
    // const logOut = getLogOutFunction();

    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   logOut();
    // }

    return Promise.reject(error);
  }
);

export default api;
