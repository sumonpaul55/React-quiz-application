import React from "react";
import "../src/Styels/App.css";
import Layout from "./components/Layout";
// import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
const App = () => {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </>
  );
};

export default App;
