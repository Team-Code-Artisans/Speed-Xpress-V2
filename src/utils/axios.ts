import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BaseUrl}`,
});

axios.interceptors.request.use(
  function (config) {
    config.headers["content-type"] = "application/json";
    const accessToken = localStorage.getItem("access token");

    if (accessToken) {
      config.headers.authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
