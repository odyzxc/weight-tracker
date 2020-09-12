import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IPersonalData } from "./interfaces";

const initialState: Partial<IPersonalData> = {};

const personalDataSlice = createSlice({
  name: "personalData",
  initialState,
  reducers: {
    addPersonalData: (state, { payload }: PayloadAction<IPersonalData>) => {
      state = payload;
    },
    clearPersonalData: (state) => {
      state = initialState;
    },
  },
});

export const { addPersonalData, clearPersonalData } = personalDataSlice.actions;

export default personalDataSlice.reducer;
