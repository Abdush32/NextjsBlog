import http from "./http";


const user = {
  login: (data) => http.post("/auth/login", data),
  logout: (data) => http.post("/logout", data),
  list: (ctx) => http.get("/user/get_users",ctx),
  userDelete: (param) => http.delete(`/admin/users/${param}`),
  getOne: (param) => http.get(`admin/users/${param}`),
  update: (data) => http.patch(`admin/users/${data.id}`, data),
  }

export default user;
