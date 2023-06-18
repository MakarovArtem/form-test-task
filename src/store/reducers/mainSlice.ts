import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface mainSlice {
  phoneNumber: string;
  emailAdress: string;
}

const initialState: mainSlice = {
  phoneNumber: "+7 (961) 026-29-17",
  emailAdress: "Artemmakarov76@yandex.ru",
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.emailAdress = action.payload
    },
  },
})

export const { setNumber, setEmail } = mainSlice.actions;

export default mainSlice.reducer;