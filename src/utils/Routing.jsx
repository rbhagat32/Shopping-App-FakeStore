import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Details from "../components/Details";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default Routing;
