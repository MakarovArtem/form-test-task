import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface stepThreeSlice {
  about: string;
}

const initialState: stepThreeSlice = {
  about: "I'm an about section",
}

export const stepThreeSlice = createSlice({
  name: 'stepThree',
  initialState,
  reducers: {
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload
    },
  },
})

export const { setAbout } = stepThreeSlice.actions;

export default stepThreeSlice.reducer;