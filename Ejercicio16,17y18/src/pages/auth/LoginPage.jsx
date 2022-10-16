import LoginFormik from "./../../components/pure/forms/loginFormik";
import { Button } from "@mui/material/";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const user = JSON.parse(sessionStorage.getItem("credentials")) || null;
  const [valuesForm, setValuesForm] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (valuesForm && user) {
      if (
        user.email === valuesForm?.email &&
        user.password === valuesForm?.password
      ) {
        user.conected = true;
        sessionStorage.setItem('credentials', JSON.stringify(user));
        navigate("/");
      } else {
        alert("Access Denied");
      }
    } else if (valuesForm && !user) {
      alert("Nonexistent user, please register");
    }
  });

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Login Page</h1>
      <LoginFormik setCredentials={ setValuesForm } />
      <Button
        style={{ marginTop: "10px" }}
        size="large"
        variant="contained"
        onClick={() => navigate("/register")}
      >
        Register here
      </Button>
    </div>
  );
};

export default LoginPage;
