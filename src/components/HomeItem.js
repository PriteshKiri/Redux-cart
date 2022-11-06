import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
const FoodItem = () => {
  const dispatch = useDispatch();
  const { itemAdded, itemRemoved } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="item_container">
      <h2>Money for food : 1000</h2>
      <div className="item_cart">
        <button onClick={() => itemRemoved(100)}>-</button>
        <h2>Lamp</h2>
        <button onClick={() => itemAdded(100)}> + </button>
      </div>
    </div>
  );
};

export default FoodItem;
