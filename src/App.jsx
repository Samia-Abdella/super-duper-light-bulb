import React, { useState, useEffect } from "react";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Login from "./page/Login";
import LightBulb from "./components/LightBulb";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  //   <Router>
  //     <div>
  //       <Routes>
  //         <Route path="/" element={<Signup />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/home" element={<Home />} />
  //       </Routes>
  //     </div>
  //   </Router>
  <LightBulb/>
  );
}

export default App;
