import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const amountTotal = useSelector((state) => state.totalAmount);
  return (
    <div>
      <h1>Current Balance: {amountTotal} Rs</h1>
    </div>
  );
};

export default Balance;
