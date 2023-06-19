import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface mainSlice {
  phone: string;
  email: string;
}

const initialState: mainSlice = {
  phone: "+7 (961) 026-29-17",
  email: "Artemmakarov76@yandex.ru",
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setNumber: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
  },
})

export const { setNumber, setEmail } = mainSlice.actions;

export default mainSlice.reducer;