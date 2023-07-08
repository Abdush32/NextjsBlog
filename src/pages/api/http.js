import axios from "axios";
import store from "../../Redux/store";

let apiUrl;
if (typeof window !== 'undefined' && document.URL.includes("localhost")) {
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/"; 
} else {  
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/";
}

const axiosConfig = {
  baseURL: 'https://blogmitiz.readandfeel.in/api/v1/',
  headers: {
    common: {
       Authorization: `Bearer  ${
        store.getState().token
      }`
      // Add any other common headers here
    },
  },
};

const http = axios.create(axiosConfig);

export default http;

// const http = {
//   baseURL: 'https://api.example.com',
//   headers: {
//     common: {
//       Authorization: `Bearer  ${
//         store.getState().token
//       }`,
//       // Add any other common headers here
//     },
//   },
// };

// export default http;