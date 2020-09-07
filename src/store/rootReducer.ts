import { combineReducers } from "@reduxjs/toolkit";
import measurements from "../features/measurements/measurementsSlice";

export default combineReducers({
  measurements,
});
