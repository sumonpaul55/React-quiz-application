import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/Styels/App.css";
import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Signup from "./components/pages/Signup";
import PrivetLogin from "./components/PrivetLogin";
import Privetroute from "./components/Privetroute";
import { AuthProvider } from "./context/Authcontext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route element={<PrivetLogin />}>
                <Route path="/login" element={<Login />}></Route>
              </Route>
              <Route element={<Privetroute />}>
                <Route path="/quiz/:id" element={<Quiz />} />
              </Route>
              <Route element={<Privetroute />}>
                <Route path="/result/:id" element={<Quiz />} />
              </Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
