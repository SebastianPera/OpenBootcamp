import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ROLES } from "./../../../models/roles.enum";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const RegisterFormik = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "", //to confirm password
    role: ROLES.USER,
    conected: false
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username too short")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
      .required("Role is required"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "¡Password must match!"
        ),
      })
      .required("Confirm password is required"),
  });

  return (
    <div className="d-flex flex-column align-items-center m-5">
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          sessionStorage.setItem('credentials', JSON.stringify(values));
          navigate('/login');
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="Your Username"
            />
            <ErrorMessage component="div" name="username" />
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="example@email.com.ar"
            />
            <ErrorMessage component="div" name="email" />
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <ErrorMessage component="div" name="password" />
            <label htmlFor="confirm">Password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="confirm password"
              type="password"
            />
            <ErrorMessage component="div" name="confirm" />

            <Button
              style={{ width: "100%", marginTop: "10px" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Register Account
            </Button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
