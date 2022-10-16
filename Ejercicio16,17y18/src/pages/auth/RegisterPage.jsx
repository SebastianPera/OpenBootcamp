import React from "react";
import RegisterFormik from "../../components/pure/forms/registerFormik";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Register Page</h1>
      <RegisterFormik />
      <Button
        style={{ marginTop: "10px" }}
        size="large"
        variant="contained"
        onClick={() => navigate("/login")}
      >
        Go to Login Page
      </Button>
    </div>
  );
};

export default RegisterPage;
