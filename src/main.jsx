import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AxiosInterceptorHeader } from "./Interceptors/axios.interceptorHeader";

AxiosInterceptorHeader();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
