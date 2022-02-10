import Home from "./pages/Home";
import React from "react";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Construction from "./pages/Constuction";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Construction" element={<Construction />} />
      </Routes>
    </Router>
  );
};

export default App;
