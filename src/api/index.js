import axios from "axios";
import queryString from "query-string";

const BASE_URL_API = "https://dummyjson.com";

const requestAPI = axios.create({
  baseURL: BASE_URL_API,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

requestAPI.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

requestAPI.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default requestAPI;
