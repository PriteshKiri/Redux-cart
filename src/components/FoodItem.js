import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const foodAmount = useSelector((state) => state.amountFood);

  const dispatch = useDispatch();
  const { itemAddedFood, itemRemovedFood } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="item_container">
      <h2>Money for food : {foodAmount}</h2>
      <div className="item_cart">
        <button onClick={() => itemRemovedFood(10)}>-</button>
        <h2>Pizza</h2>
        <button onClick={() => itemAddedFood(10)}> + </button>
      </div>
    </div>
  );
};

export default FoodItem;
