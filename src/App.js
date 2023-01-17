import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Styels/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
