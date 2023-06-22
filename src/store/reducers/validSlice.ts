import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface validSlice {
  stepOneValid: boolean;
  stepTwoValid: boolean;
  stepThreeValid: boolean;
}

const initialState: validSlice = {
  stepOneValid: false,
  stepTwoValid: false,
  stepThreeValid: false,
}

export const validSlice = createSlice({
  name: 'valid',
  initialState,
  reducers: {
    setStepOneValid: (state, action: PayloadAction<boolean>) => {
      state.stepOneValid = action.payload
    },
    setStepTwoValid: (state, action: PayloadAction<boolean>) => {
      state.stepTwoValid = action.payload
    },
    setStepThreeValid: (state, action: PayloadAction<boolean>) => {
      state.stepThreeValid = action.payload
    },

  },
})

export const { setStepOneValid, setStepTwoValid, setStepThreeValid } = validSlice.actions;

export default validSlice.reducer;