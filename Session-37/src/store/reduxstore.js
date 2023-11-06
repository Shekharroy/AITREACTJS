import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import myReducer from "../reducers/myReducer";
import productsReducer from "../reducers/productsReducer";
import logger from "redux-logger";

var combinedReducer = combineReducers({ myReducer, productsReducer });

let myStore = legacy_createStore(combinedReducer, applyMiddleware(logger));

export default myStore;
