import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import Button from "./Button";
import Form from "./Form";
import Textinput from "./Textinput";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoding] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoding(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoding(false);
      setError("Failed to login");
    }
  };

  return (
    <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
      <Textinput type="email" placeholder="Enter eamil" icon="alternate_email" value={email} required onChange={(e) => setEmail(e.target.value)} />
      <Textinput type="password" placeholder="Enter password" icon="lock" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" disabled={loading}>
        <span>Login now</span>
      </Button>
      {error && <p className="error">{error}</p>}
    </Form>
  );
};

export default LoginForm;
