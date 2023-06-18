import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Advantage {
  "advantage": string;
}

interface stepTwoSlice {
  advantages: Advantage[];
  checkboxGroup: string[] | boolean;
  radioGroup: string;
}

const initialState: stepTwoSlice = {
  advantages: [
    {"advantage": ""},
    {"advantage": ""},
    {"advantage": ""},
  ],
  checkboxGroup: false,
  radioGroup: "1",
}

export const stepTwoSlice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: {
    setAdvantages: (state, action: PayloadAction<Advantage[]>) => {
      state.advantages = action.payload
    },
    setCheckboxGroup: (state, action: PayloadAction<string[] | boolean>) => {
      state.checkboxGroup = action.payload
    },
    setRadioGroup: (state, action: PayloadAction<string>) => {
      state.radioGroup = action.payload
    },
  },
})

export const { setAdvantages, setCheckboxGroup, setRadioGroup } = stepTwoSlice.actions;

export default stepTwoSlice.reducer;