import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const PrivetLogin = () => {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : <Outlet />;
};

export default PrivetLogin;
