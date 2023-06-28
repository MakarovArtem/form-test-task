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
  checkbox: [];
  radio: string;
  about: string;
}

const initialState: formSlice = {
  phone: "+7 (961) 026-29-17",
  email: "Artemmakarov76@yandex.ru",
  nickname: "EineApfelsine",
  name: "Artem",
  surname: "Makarov",
  sex: "man",
  advantages: [
    {"advantage": ""},
    {"advantage": ""},
    {"advantage": ""},
  ],
  checkbox: [],
  radio: "1",
  about: "Never gonna give you up",
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