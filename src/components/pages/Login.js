import React from "react";
import loginImg from "../../assets/images/login.svg";
import classes from "../../Styels/login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={loginImg} altText="Login" />
        <Form className={classes.login}>
          <Textinput type="email" placeholder="Enter eamil" icon="alternate_email" />
          <Textinput type="password" placeholder="Enter password" icon="lock" />
          <Button>Login now</Button>
        </Form>
      </div>
    </>
  );
};

export default Login;
