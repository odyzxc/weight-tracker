import { combineReducers } from "@reduxjs/toolkit";
import measurements from "../features/measurements/measurementsSlice";
import personalData from '../features/personalData/personalDataSlice';

export default combineReducers({
  measurements,
  personalData
});
