// const baseUrl = "https://blogmitiz.readandfeel.in/api/v1";
const baseUrl2 = "https://blogmitiz.readandfeel.in/api/v1";

const localdata = JSON.parse(typeof window !== 'undefined' && localStorage.getItem("token"));
const token = localdata !== null && localdata.token ? localdata.token : null;

console.log(localdata);



export const geUserLsit = () => {
  return fetch(`${baseUrl2}/user/get_users`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

