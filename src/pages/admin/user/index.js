import React, { useState,useEffect } from "react";
import AdminLayout from "../../../layout/AdminLayout/AdminLayout";
import { Card, CardBody } from "reactstrap";
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
import userdata from "../../../Services/user";
import { Table } from "react-bootstrap";
import User from "./User";

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
  console.log("ABDUSH BRO", props.res);

  const [loader, setLoader] = useState(false);

const getUser = () =>{
  userdata
    .list()
    .then((res) => {
      console.log(res);
      console.log("RESPONSE", res);
      if (res.data.status) {
        
      }
    })
    .catch(function (error) {
      console.log("errors", error.message);
      // data = {};
    });
}


useEffect(() => {
  // getUser()
}, [])



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
export async function getServerSideProps() {
  // Fetch data from external API
  let data = {}

 await userdata
    .list()
    .then((res) => {
      console.log(res);
      console.log("RESPONSE", res);
      if (res.data.status) {
        data = res.data.data
      }
    })
    .catch(function (error) {
      console.log("errors", error.message);
      // data = {};
    });
// const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// const data = await res.json()

  //  await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
 
  // Pass data to the page via props
  return { props: { data } }
}


