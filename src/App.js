import React from "react";
import "../src/Styels/App.css";
import Layout from "./components/Layout";
import Login from "./components/pages/Login";
// import Home from "./components/pages/Home";
// import Signup from "./components/pages/Signup";
const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        <Login />
      </Layout>
    </>
  );
};

export default App;
