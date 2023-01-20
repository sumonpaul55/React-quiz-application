import React from "react";
import illustrImg from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

const Signup = () => {
  return (
    <>
      <h1>Create an Account</h1>
      <div className="column">
        <Illustration src={illustrImg} altText="Sign Up" />
        <SignupForm />
      </div>
    </>
  );
};
export default Signup;
