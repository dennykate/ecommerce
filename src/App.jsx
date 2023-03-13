import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCart from "./components/AddToCart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="max-w-[1024px] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/addToCart" element={<AddToCart />} />
      </Routes>
    </div>
  );
};

export default App;
