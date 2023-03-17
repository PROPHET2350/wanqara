import axios from "axios";

export const AxiosInterceptorHeader = () => {
  axios.interceptors.request.use((req) => {
    let token = JSON.parse(localStorage.getItem("token")).token;
    const newHeaders = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    req.headers = newHeaders;
    return req;
  });
};
