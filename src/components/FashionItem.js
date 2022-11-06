import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector } from "react-redux";

const FashionItem = () => {
  const fashionAmount = useSelector((state) => state.amountFashion);

  const dispatch = useDispatch();
  const { itemAddedFashion, itemRemovedFashion } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="item_container">
      <h2>Money for Fashion : {fashionAmount}</h2>
      <div className="item_cart">
        <button onClick={() => itemRemovedFashion(15)}>-</button>
        <h2>Makeup</h2>
        <button onClick={() => itemAddedFashion(15)}> + </button>
      </div>
    </div>
  );
};

export default FashionItem;
