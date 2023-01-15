import React from "react";
import classes from "../../Styels/signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
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
          <Textinput type="email" placeholeder="Enter_email" icon="alternate_email" />
          <Textinput type="password" placeholeder="Enter passward" icon="lock" />
          <Textinput type="password" placeholeder="Confirm passward" icon="lock_clock" />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button>Submit Now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};
export default Signup;
