import React, { useState, useEffect } from "react";
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
import userdata from "../../api/user";
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

export async function getServerSideProps(ctx) {
  try {
    const response = await userdata.list(ctx);
    const data = response.data.data.users;

    return { props: { data } };
  } catch (error) {
    console.log("errors", error);
    return { props: { data: {} } };
  }
}
