const fashionInitialAmount = 20000;
const amountReducerFashion = (state = fashionInitialAmount, action) => {
  if (state <= fashionInitialAmount && state >= 0) {
    if (action.type === "addItemFashion") {
      return state - action.payload;
    } else if (action.type === "removeItemFashion") {
      if (state < fashionInitialAmount) {
        return state + action.payload;
      }
    } else {
      return state;
    }
  }
};

export default amountReducerFashion;
