import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

export default function Privetroute() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
