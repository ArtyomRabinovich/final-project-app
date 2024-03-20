import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomepageComponent";
import About from "../pages/AboutPageComponent";
import Items from "../pages/ItemsComponent";
import ItemDetails from "../pages/ItemDetailsComponent";
import NotFound404 from "../pages/NotFound404Component";

const RoutesUtility = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Items" element={<Items />} />
      <Route path="/ItemDetails/:id" element={<ItemDetails />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default RoutesUtility;
