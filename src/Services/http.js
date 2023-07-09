import axios from "axios";
import store from "../Redux/store";
import { toast } from "react-toastify";

let apiUrl;
if (typeof window !== 'undefined' && document.URL.includes("localhost")) {
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/"; 
} else {  
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/";
}

const http = axios.create({
  baseURL: apiUrl,
  //timeout: 1000,
  headers: { "Content-Type": "application/json" },
});
http.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers.common["Authorization"] =  `Bearer  ${
        store.getState().token
      }`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      localStorage.clear();
      // typeof window !== 'undefined' && window.location.href = "/";
    } else if (error.response.status === 404) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else if (error.response.status === 500) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      }); 
    } else if (error.response.status === 403) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else if (error.response.status === 415) {
      toast.error(
        error.message +
          " - Unsupported media type. Please upload image file only.",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    } else {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

export default http;