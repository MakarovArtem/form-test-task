import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

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
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload
    },
  },
})

export const { setAbout } = stepThreeSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default stepThreeSlice.reducer;