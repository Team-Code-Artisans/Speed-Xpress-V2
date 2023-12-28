import axios from "axios";
import { getAccessToken } from "./authToken";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BaseUrl}`,
});

api.interceptors.request.use(
  function (config) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const accessToken = getAccessToken();

    if (accessToken && publishableKey) {
      config.headers.Authorization = `Bearer ${publishableKey};Bearer ${accessToken}`;
    }

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
    return Promise.reject(error);
  }
);

export default api;
