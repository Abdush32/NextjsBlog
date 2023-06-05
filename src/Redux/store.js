import { createStore } from 'redux'

let apiUrl, baseUrl;
if(typeof window !== 'undefined' && document.URL.includes("localhost")){
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/";
  baseUrl = "https://blogmitiz.readandfeel.in/api/v1/";
}
else{
  apiUrl = "https://blogmitiz.readandfeel.in/api/v1/";
  baseUrl ="https://blogmitiz.readandfeel.in/api/v1/";
}
let initialState = {
  apiUrl: apiUrl,
  baseUrl: baseUrl,
  
};
if (typeof window !== 'undefined' && localStorage.getItem("token")) {
  initialState = { ...initialState, token: localStorage.getItem("token") };
}
if (typeof window !== 'undefined' && localStorage.getItem("first_name")) {
  initialState = {
    ...initialState,
    first_name: localStorage.getItem("first_name")
  };
}
if (typeof window !== 'undefined' && localStorage.getItem("last_name")) {
    initialState = {
      ...initialState,
      last_name: localStorage.getItem("last_name")
    };
  }
if (typeof window !== 'undefined' && localStorage.getItem("isAdmin")) {
  initialState = {
    ...initialState,
    isAdmin: localStorage.getItem("isAdmin")
};
}
if (typeof window !== 'undefined' && localStorage.getItem("email")) {
  initialState = {
    ...initialState,
    email: localStorage.getItem("email")
  };
}
if (typeof window !== 'undefined' && localStorage.getItem("user_id")) {
  initialState = {
    ...initialState,
    user_id: localStorage.getItem("user_id")
  };

}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    case 'UPDATE-EMAIL':
      return {...state, ...rest }
    case 'login':
      return {...state, ...rest }
    case 'logout':
      typeof window !== 'undefined' && localStorage.clear();
      const initialState = {
        apiUrl: apiUrl,
        baseUrl: baseUrl
      };
      return (state = initialState);
    default:
      return state
  }
}

const store = createStore(changeState, typeof window !== 'undefined' && window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())
store.subscribe(() => {
  console.log(store);
});

export default store;