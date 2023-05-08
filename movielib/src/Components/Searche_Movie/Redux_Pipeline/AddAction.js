export const addAction = (data, dispatch) => {
  dispatch({
    type: "ADD",
    payload: data,
  });
};

export const removeAction = (data) => {
  return {
    type: "REMOVE",
    payload: data,
  };
};


