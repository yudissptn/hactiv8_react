import { applyMiddleware, createStore, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import myReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const midty = applyMiddleware(thunk, logger);

const store = createStore(myReducer, composeEnhancers(midty));

export default store;
