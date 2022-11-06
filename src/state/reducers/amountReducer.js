const foodInitialAmount = 1000;
// const TotalinitialAmount = 1000;
// const fashionInitialAmount = 1000;
// const homeInitialAmount = 1000;
const amountReducerFood = (state = foodInitialAmount, action) => {
  if (state <= foodInitialAmount && state >= 0) {
    if (action.type === "addItem") {
      return state - action.payload;
    } else if (action.type === "removeItem") {
      if (state < foodInitialAmount) {
        return state + action.payload;
      }
    } else {
      return state;
    }
  }
};

export default amountReducerFood;
