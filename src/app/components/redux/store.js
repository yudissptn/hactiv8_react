import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import myReducer from "./reducer";

const midty = applyMiddleware(logger);

const store = createStore(myReducer);

export default store;
