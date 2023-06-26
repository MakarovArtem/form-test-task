import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Advantage {
  "advantage": string;
}

export interface IStepTwoSlice {
  advantages: Advantage[];
  checkbox: string[] | boolean;
  radio: string;
}

const initialState: IStepTwoSlice = {
  advantages: [
    {"advantage": ""},
    {"advantage": ""},
    {"advantage": ""},
  ],
  checkbox: false,
  radio: "1",
}

export const stepTwoSlice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: {
    setAdvantages: (state, action: PayloadAction<Advantage[]>) => {
      state.advantages = action.payload
    },
    setCheckbox: (state, action: PayloadAction<string[] | boolean>) => {
      state.checkbox = action.payload
    },
    setRadio: (state, action: PayloadAction<string>) => {
      state.radio = action.payload
    },
  },
})

export const { setAdvantages, setCheckbox, setRadio } = stepTwoSlice.actions;

export default stepTwoSlice.reducer;