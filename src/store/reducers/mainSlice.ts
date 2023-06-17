import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

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
    // Use the PayloadAction type to declare the contents of `action.payload`
    setNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.emailAdress = action.payload
    },
  },
})

export const { setNumber, setEmail } = mainSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default mainSlice.reducer;