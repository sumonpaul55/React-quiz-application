import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authcontext";
import classes from "../Styels/account.module.css";

const Account = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <Link to="profile">{currentUser.displayName}</Link>
          <span className="material-icons-outlined" title="Logout" onClick={logout}>
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="signup">Signup</Link>
          <Link to="login">Login</Link>
        </>
      )}
    </div>
  );
};
export default Account;
