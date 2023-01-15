import React from "react";
import "../src/Styels/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
