export const itemAddedFood = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "addItemFood",
      payload: amount,
    });
  };
};

export const itemRemovedFood = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "removeItemFood",
      payload: amount,
    });
  };
};

export const itemAddedFashion = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "addItemFashion",
      payload: amount,
    });
  };
};

export const itemRemovedFashion = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "removeItemFashion",
      payload: amount,
    });
  };
};
