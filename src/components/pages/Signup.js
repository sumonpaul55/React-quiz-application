import React from "react";
import classes from "../../Styels/signup.module.css";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";

const Signup = () => {
  return (
    <>
      <h1>Create an Account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.signup}>
          <Textinput type="text" placeholeder="Enter name" icon="person" />
          <Textinput type="email" placeholeder="Enter email" icon="alternate_email" />
          <Textinput type="password" placeholeder="Enter passward" icon="Lock" />
          <Textinput type="password" placeholeder="Confirm passward" icon="Lock" />
        </Form>
      </div>
    </>
  );
};

export default Signup;
