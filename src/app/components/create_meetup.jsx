import React from "react";
import { Provider } from "react-redux";

import "../../App.css";
import Mainredux from "./redux/mainredux";
import store from "./redux/store";

const CreateMeetup = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Mainredux>CreateMeetup</Mainredux>
      </div>
    </Provider>
  );
};
export default CreateMeetup;
