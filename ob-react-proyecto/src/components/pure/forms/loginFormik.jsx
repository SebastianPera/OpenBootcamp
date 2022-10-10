import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        //* Initial values that the form will take */
        initialValues={initialCredentials}
        //* Yup Validation Schema */
        validationSchema={loginSchema}
        //* onSubmit Event */
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localstorage
          await localStorage.setItem("credentials", values);
          navigate('/profile');
        }}
      >
        {(props) => {
          const { isSubmitting } = props;
          return (
            <Form>
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
              <button type="submit">Login</button>
              {isSubmitting ? <p>Login your credentials...</p> : null}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginFormik;
