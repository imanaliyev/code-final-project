import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Register() {
  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();

  async function addUser(item) {
    await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/");
      });
  }

  return (
    <div>
      <div id="register">
        <div className="container">
          <h1>Sign Up</h1>
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={Yup.object({
              username: Yup.string().required("required"),
              password: Yup.string().required("required"),
              email: Yup.string()
                .email("required")
                .required("required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitting(false);
                addUser(values);
                resetForm();
              }, 400);
            }}
          >
            <Form>
             
              <Field placeholder="username" name="username" type="text" />
              <h4>
                <ErrorMessage name="username" />
              </h4>

              <Field name="email" placeholder="e-mail" type="email" />
              <h4>
                <ErrorMessage name="e-mail" />
              </h4>

              <Field
                placeholder="password" className="password"name="password" type="password"
              />
              <h4>
                <ErrorMessage name="password" />
              </h4>

              <div className="go_register">
                <Link to="/login">
                  <h4>do you have an account?</h4>
                </Link>
              </div>

              <button type="submit">register</button>
            </Form>
          </Formik>
        </div>
      </div>  
    </div>
  );
}

export default Register;
