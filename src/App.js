import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/product/:id" Component={ProductDetail} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
