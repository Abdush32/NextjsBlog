import React, { useState, useEffect } from "react";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import { Card, CardBody } from "reactstrap";
import store from "../../../Redux/store";
import Cookies from "js-cookie";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import userdata from "../../api/user";
import { Table } from "react-bootstrap";
import User from "./User";
const axios = require("axios");

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const Index = (props) => {
  console.log("ABDUSH BRO", props.data);
  const [loader, setLoader] = useState(false);

  const getUser = () => {
    userdata
      .list()
      .then((res) => {
        console.log("RESPONSE", res);
        if (res.data.status) {
        }
      })
      .catch(function (error) {
        console.log("errors", error.message);
        // data = {};
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AdminLayout>
      <Card className="p-3" style={{ minHeight: "70vh" }}>
        <CardBody>
          <Table responsive className="newThemeTable">
            <thead>
              <tr>
                <th scope="col" className="border-top-0" width={7 + "%"}>
                  S.No.
                </th>
                <th scope="col">
                  <span className="border-top-0 sortable sort">Name</span>
                </th>
                <th scope="col">
                  <span className="border-top-0 sortable sort">Email</span>
                </th>
                <th scope="col" className="border-top-0">
                  Phone
                </th>
                <th scope="col">
                  <span className="border-top-0 sortable sort">Added On</span>
                </th>
                <th scope="col" className="border-top-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {props?.data?.length > 0
                ? props?.data?.map((user, index) => (
                    <User user={user} key={`key-user-${index}`} />
                  ))
                : !loader && (
                    <tr>
                      <td key={0} colSpan="6">
                        <p className="text-center">User not found.</p>
                      </td>
                    </tr>
                  )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </AdminLayout>
  );
};

export default Index;
// export async function getServerSideProps() {
//   // Fetch data from external API
//   let data = {};
//   userdata
//     .list()
//     .then((response) => {
//       console.log("mitiz",response);
//     })
//     .catch(function (error) {
//       console.log("errors", error.message);
//       // data = {};
//     });
//   return { props: { data } };
// }

export async function getServerSideProps() {
  // Fetch data from external API
  // console.log("Hello World");
  let data = {};
  // let config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: ,
  //   headers: {
  //     Accept: "application/json",
  //     Authorization: `Bearer 203|R3mFBPg0HIgPueAUQfEm0It1cj9b6pDF36CDJOUL`,
  //   },
  // };

  
  axios.get("https://blogmitiz.readandfeel.in/api/v1/user/get_users",{},{
    Accept: "application/json",
    Authorization: `Bearer 203|R3mFBPg0HIgPueAUQfEm0It1cj9b6pDF36CDJOUL`,
  })
    .then((response) => {
console.log(response.data);
      data = JSON.stringify(response.data);
      // console.log(JSON.stringify("RESPONSE", response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  return { props: { data } };
}
