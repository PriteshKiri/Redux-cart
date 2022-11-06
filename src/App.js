import React from "react";
import Balance from "./components/Balance";
import FoodItem from "./components/FoodItem";
import "./App.css";
import FashionItem from "./components/FashionItem";

const App = () => {
  return (
    <div className="main_container">
      <Balance />
      <FoodItem />
      <FashionItem />
    </div>
  );
};

export default App;
