import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 } from "react-native-uuid";

import { IMeasurement } from "./interfaces";

type MeasurementState = {
  measurements: IMeasurement[];
};

const testMeasurement: IMeasurement = {
  id: v1(),
  weight: 100 * 1000,
  date: new Date(2020, 9, 4),
};

const initialState: MeasurementState = {
  measurements: [testMeasurement],
};

const measurementsSlice = createSlice({
  name: "measurements",
  initialState,
  reducers: {
    addMeasurement: (state, { payload }: PayloadAction<Pick<IMeasurement, "weight" | "label">>) => {
      const { weight, label } = payload;
      state.measurements.push({
        id: v1(),
        weight: weight * 1000,
        label,
        date: new Date(),
      });
    },
    clearMeasurements: (state) => {
      state.measurements = [];
    },
  },
});

export const { addMeasurement, clearMeasurements } = measurementsSlice.actions;

export default measurementsSlice.reducer;
