import http from "./http";

const user = {
  login: (data) => http.post("/auth/login", data),
  logout: (data) => http.post("/logout", data),
  list: () => http.get("/user/get_users"),
  userDelete: (param) => http.delete(`/admin/users/${param}`),
  getOne: (param) => http.get(`admin/users/${param}`),
  update: (data) => http.patch(`admin/users/${data.id}`, data),
  }

export default user;
