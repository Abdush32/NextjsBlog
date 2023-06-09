import { createStore } from "redux";

let apiUrl, baseUrl;
if (typeof window !== 'undefined' && document.URL.includes("localhost")) {
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/";
  baseUrl = "https://blogmitiz.readandfeel.in/api/v1/";
} else {
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/";
  baseUrl = "https://blogmitiz.readandfeel.in/api/v1/";
}         
let initialState = {
  apiUrl: apiUrl,
  baseUrl: baseUrl,
};
if (typeof window !== 'undefined' && sessionStorage.getItem("token")) {
  initialState = { ...initialState, token: typeof window !== 'undefined' && sessionStorage.getItem("token") };
}
if (typeof window !== 'undefined' && sessionStorage.getItem("mobile")) {
initialState = {
    ...initialState,
    mobile: typeof window !== 'undefined' && sessionStorage.getItem("mobile"),
  };
}
if (typeof window !== 'undefined' && sessionStorage.getItem("user_id")) {
  initialState = {
    ...initialState,
    user_id: typeof window !== 'undefined' && sessionStorage.getItem("user_id"),
  };
}
if (typeof window !== 'undefined' && sessionStorage.getItem("email")) {
  initialState = {
    ...initialState,
    email: typeof window !== 'undefined' && sessionStorage.getItem("email"),
  };
}
if (typeof window !== 'undefined' && sessionStorage.getItem("name")) {
  initialState = {
    ...initialState,
    name: typeof window !== 'undefined' && sessionStorage.getItem("name"),
  };
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "login":
      return {state, ...rest };
    case "logout":
      typeof window !== 'undefined' && sessionStorage.clear();
      const initialState = {
        apiUrl: apiUrl,
        baseUrl: baseUrl,
      };
      return (state = initialState);
    default:
      return state;
  }
};

const store = createStore(
  changeState,
  typeof window !== "undefined" &&
    window._REDUX_DEVTOOLS_EXTENSION_ &&
    window._REDUX_DEVTOOLS_EXTENSION_()
);
store.subscribe(() => {
  console.log(store);
});

export default store;
