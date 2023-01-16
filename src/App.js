import React from "react";
import "../src/Styels/App.css";
import Layout from "./components/Layout";
// import Login from "./components/pages/Login";
// import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
// import Home from "./components/pages/Home";
// import Signup from "./components/pages/Signup";
const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Quiz /> */}
        <Result />
      </Layout>
    </>
  );
};

export default App;
