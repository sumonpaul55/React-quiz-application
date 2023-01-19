import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Textinput from "./Textinput";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    if (password !== confirmpassword) {
      return setError("Password not matched");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError("failed to create account");
    }
  }
  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <Textinput required type="text" placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Textinput required type="email" placeholder="Enter_email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Textinput required type="password" placeholder="Enter passward at least 6 character" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Textinput required type="password" placeholder="Confirm passward" icon="lock_clock" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <Checkbox required text="I agree to the Terms &amp; Conditions" value={agree} onChange={(e) => setAgree(e.target.value)} />
      <Button type="submit" disabled={loading}>
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
