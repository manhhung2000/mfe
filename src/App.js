import React from "react";
import "./app.css";
import Header from "./components/Header";
import { App as ProductDetail } from "./ProductDetail/App";
import { App as Cart } from "./Cart/App";

const App = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <ProductDetail />
        <Cart />
      </div>
    </div>
  );
};

export default App;
