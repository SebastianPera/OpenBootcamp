import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = ({ setCredentials }) => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <h4>Login Formik</h4>
      <Formik
        //* Initial values that the form will take */
        initialValues={initialCredentials}
        //* Yup Validation Schema */
        validationSchema={loginSchema}
        //* onSubmit Event */
        onSubmit={async (values, { setSubmitting, resetForm } ) => {
          await new Promise((r) => setTimeout(r, 1000));
          // alert(JSON.stringify(values, null, 2));
          // We save the data in the sessionStorage
          resetForm();
          setSubmitting(false);
          setCredentials(values);
        }}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <Form style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com.ar"
              />
              <ErrorMessage component="div" name="email" />
              <label htmlFor="email">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />
              <div>
                <ErrorMessage component="div" name="password" />
              </div>
              <Button
                style={{ marginTop: "10px" }}
                size="large"
                variant="contained"
                type="submit"
              >
                Login
              </Button>
              {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
