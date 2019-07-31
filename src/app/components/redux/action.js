export const incAction = payload => {
  return {
    type: "INCREMENT",
    payload
  };
};

export const decAction = payload => {
  return {
    type: "DECREMENT",
    payload
  };
};
