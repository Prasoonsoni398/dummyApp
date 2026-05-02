import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
