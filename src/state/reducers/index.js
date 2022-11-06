import { combineReducers } from "redux";
import amountReducerFood from "./amountReducer";
import amountReducerFashion from "./fashionReducer";
import amountReducerTotal from "./totalReducer";

const reducers = combineReducers({
  amountFood: amountReducerFood,
  amountFashion: amountReducerFashion,
  totalAmount: amountReducerTotal,
});

export default reducers;
