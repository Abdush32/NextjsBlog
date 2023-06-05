import http from "./http";
const common = {
  update_dmf_details: (data) => http.post("/update-dmf-details", data),
  dmfToken: (param) => http.get("/get-dmf-token-status", { params: param }),
  update: (data) => http.post("/admin/dmf-submissions/update-dmf-legal-info", data),
  grantTypes: ["DAF"],

  getFullName(data) {
    let name = "";

    if (data !== null && data.first_name !== null) {
      name += data?.first_name + ` `;
    }

    if (data !== null && data.last_name !== null) {
      name += data?.last_name + ` `;
    }

    return name;
  },
  isValidEmail: (email) => {
    let emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRule.test(email)) {
      return true;
    }
    return false;
  },

  isValidUrl: (url) => {
    let urlRule = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    if (urlRule.test(url)) {
      return true;
    }
    return false;
  },
  numberFormat: (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  isJson: (item) => {
    item = typeof item !== "string" ? JSON.stringify(item) : item;

    try {
      item = JSON.parse(item);
    } catch (e) {
      return false;
    }

    if (typeof item === "object" && item !== null) {
      return true;
    }

    return false;
  },

  errMsg: (str) => {
    let newStr = str.split(".");
    return newStr[2];
  },
   getSignstatuscolor : (status) => {
    switch (status) {
      case "NOT_AVAILABLE":
        return "secondary";
        break;
      case "SIGNED":
        return "success";

        break;
      case "PENDING":
        return "warning";

        break;
      case "DECLINED_BY_USER":
        return "info";

        break;
      case "CANCELLED_BY_ADMIN":
        return "danger";

        break;
      case "NOT_SENT":
        return "primary";

        break;

      default:
        break;
    }
  }

};

export default common;
