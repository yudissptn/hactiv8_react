import axios from "axios";

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

export const fetchAction = payload => {
  return {
    type: "FETCHING",
    payload
  };
};

export const fetchThunk = payload => {
  let options = {
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users"
  };

  return async (dispatch, getState) => {
    try {
      let curr = await getState();
      let state = [];

      if (curr.users !== undefined) {
        state = curr.users;
      }

      console.log("=====", state);

      let { data } = await axios(options);
      if (data) {
        dispatch(fetchAction(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
