// src/reducers/index.js
import { combineReducers } from "@reduxjs/toolkit";
import valueSlice from "./valueSlice";

const rootReducer = combineReducers({
  value: valueSlice,
});

export default rootReducer;
