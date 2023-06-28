import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Advantage {
  "advantage": string;
}

interface formSlice {
  phone: string;
  email: string;
  nickname: string;
  name: string;
  surname: string;
  sex: string;
  advantages: Advantage[];
  checkbox: string[];
  radio: string;
  about: string;
}

const initialState: formSlice = {
  phone: "",
  email: "",
  nickname: "",
  name: "",
  surname: "",
  sex: "not choosen",
  advantages: [
    {"advantage": ""},
    {"advantage": ""},
    {"advantage": ""},
  ],
  checkbox: ["1"],
  radio: "1",
  about: "",
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<object>) => {
      const update = action.payload;
      return {...state, ...update};
    },
  },
})

export const { updateFormData } = formSlice.actions;

export default formSlice.reducer;