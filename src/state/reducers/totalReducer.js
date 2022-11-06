const TotalinitialAmount = 100000;
// const TotalinitialAmount = 1000;
// const fashionInitialAmount = 1000;
// const homeInitialAmount = 1000;
const amountReducerTotal = (state = TotalinitialAmount, action) => {
  if (state <= TotalinitialAmount && state >= 0) {
    if (action.type === "addItemFood" || action.type === "addItemFashion") {
      return state - action.payload;
    } else if (
      action.type === "removeItemFood" ||
      action.type === "removeItemFashion"
    ) {
      if (state < TotalinitialAmount) {
        return state + action.payload;
      }
    } else {
      return state;
    }
  }
};

export default amountReducerTotal;
