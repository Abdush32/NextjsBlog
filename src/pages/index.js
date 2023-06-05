"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import user from "../Services/user"
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/router'


const Index = () => {
  
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState("");
  const dispatch = useDispatch();
  const router= useRouter()

  const handleChange = (e, field) => {
    setFields({ ...fields, [field]: e.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    let params = fields;
    user
      .login(params)
      .then((data) => {
        console.log(data);
        let res = data.data;
        if (res.status) {
          console.log(data);
          localStorage.setItem("mobile", data.data.data.mobile);
          localStorage.setItem("token", data.data.data.token);
          localStorage.setItem("email", data.data.data.email);
          localStorage.setItem("name", data.data.data.name);
          localStorage.setItem("user_id", data.data.data.user_id);
          let payload = {
            token: data.data.data.token,
            mobile: data.data.data.mobile,
            user_id: data.data.data.user_id,
            email: data.data.data.email,
            name: data.data.data.name,
          };
          dispatch({ type: "login", ...payload });
          setLoader(false);

          // if (data.data.data.token) {
          //   console.log("hello");
          //   redirect("/admin/dashboard");
          // } else {
          //   console.log("hello");
          // }
        } else {
          let errors = {};
          for (let key in res.message) {
            errors[key] = res.message[key];
          }
          setErrors(errors);
          setLoader(false);
        }
      })
      .catch(function (error) {
        console.log("error", error);
        setLoader(false);
      });
  };

  if(typeof window !== 'undefined' && localStorage.getItem("token")){
    router.push("/admin/dashboard");
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      <Container>
        <Row className="justify-content-center align-items-center px-3">
          <Col lg={8}>
            <Row>
              <Col md={7} className="bg-white border p-5">
                <div className="">
                  <h1>Login</h1>
                  <p className="text-black-50">Sign In to your account</p>

                  <form onSubmit={handleSubmit}>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} fixedWidth />
                      </InputGroup.Text>
                      <Form.Control
                        name="email"
                        required
                        placeholder="email"
                        aria-label="email"
                        value={fields["email"] ? fields["email"] : ""}
                        onChange={(event) => handleChange(event, "email")}
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} fixedWidth />
                      </InputGroup.Text>
                      <Form.Control
                        type="password"
                        name="password"
                        required
                        placeholder="password"
                        aria-label="password"
                        value={fields["password"] ? fields["password"] : ""}
                        onChange={(event) => handleChange(event, "password")}
                      />
                    </InputGroup>

                    <Row>
                      <Col xs={6}>
                        <Button
                          className="px-4"
                          variant="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
              <Col
                md={5}
                className="bg-primary text-white d-flex align-items-center justify-content-center p-5"
              >
                <div className="text-center">
                  <h2>Seeding-Justice</h2>

                  <Link href="/register">
                    <button
                      className="btn btn-lg btn-outline-light mt-3"
                      type="button"
                    >
                      Register Now!
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
