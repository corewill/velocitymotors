// import { useState } from 'react'
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import NoContent from "./components/NoContent";
import Footr from "./components/Footr";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
// import "./App.css";

function App() {
  return (
    <div className="App">
      
      <>
        <ToastContainer />
        <Nav />
        <div>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoContent />} />
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
        <Footr />
      </>
    </div>
  );
}

export default App;
