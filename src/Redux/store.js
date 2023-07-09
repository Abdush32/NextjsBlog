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
if (typeof window !== 'undefined' && localStorage.getItem("token")) {
  initialState = { ...initialState, token: typeof window !== 'undefined' && localStorage.getItem("token") };
}
if (typeof window !== 'undefined' && localStorage.getItem("mobile")) {
initialState = {
    ...initialState,
    mobile: typeof window !== 'undefined' && localStorage.getItem("mobile"),
  };
}
if (typeof window !== 'undefined' && localStorage.getItem("user_id")) {
  initialState = {
    ...initialState,
    user_id: typeof window !== 'undefined' && localStorage.getItem("user_id"),
  };
}
if (typeof window !== 'undefined' && localStorage.getItem("email")) {
  initialState = {
    ...initialState,
    email: typeof window !== 'undefined' && localStorage.getItem("email"),
  };
}
if (typeof window !== 'undefined' && localStorage.getItem("name")) {
  initialState = {
    ...initialState,
    name: typeof window !== 'undefined' && localStorage.getItem("name"),
  };
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    case "login":
      return {state, ...rest };
    case "logout":
      typeof window !== 'undefined' && localStorage.clear();
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
