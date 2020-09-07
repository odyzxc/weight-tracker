import { createSelector } from "@reduxjs/toolkit";

import { RootState } from '../../store/store';

const getState = (state: RootState) => state.measurements;

export const getMeasurements = createSelector(
  getState,
  (state) => state.measurements
);
