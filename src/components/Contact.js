import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

class Contact extends Component {
  initialValues = () => {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  };

  validationSchema = () => {
    return Yup.object().shape({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required")
    });
  };

  onSubmit = fields => {
    alert("Dipranjan :-)\n\n" + JSON.stringify(fields, null, 4));
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues()}
        validationSchema={this.validationSchema()}
        onSubmit={this.onSubmit}
        render={({ errors, status, touched }) => (
          <div className="row">
            <h2 className="d-block font-italic">Contact</h2>
            <div className="mt-4">
              <Form className="mt-3 ml-1">
                <div className="form-group">
                  <label htmlFor="firstName">FirstName</label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="firstName"
                    className={
                      "form-control" +
                      (errors.firstName && touched.firstName
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">LastName</label>

                  <Field
                    name="lastName"
                    type="text"
                    placeholder="LastName"
                    className={
                      "form-control" +
                      (errors.lastName && touched.lastName ? " is-invalid" : "")
                    }
                  />

                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field
                    name="email"
                    type="text"
                    placeholder="email"
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <button type="submit" className="btn btn-primary mr-3">
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </Form>
            </div>
          </div>
        )}
      />
    );
  }
}

export default Contact;
