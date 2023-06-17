import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface stepTwoSlice {
  advantages: object[];
  checkboxGroup: string[] | false;
  radioGroup: string;
}

const initialState: stepTwoSlice = {
  advantages: [
    {"field-advantages-1": ""},
    {"field-advantages-2": ""},
    {"field-advantages-3": ""},
  ],
  checkboxGroup: false,
  radioGroup: "1",
}

export const stepTwoSlice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // [{"field-advantages-1":"df"},{"field-advantages-2":"df"}]
    setAdvantages: (state, action: PayloadAction<object[]>) => {
      state.advantages = action.payload
    },
    setCheckboxGroup: (state, action: PayloadAction<string[]>) => {
      state.checkboxGroup = action.payload
    },
    setRadioGroup: (state, action: PayloadAction<string>) => {
      state.radioGroup = action.payload
    },
  },
})

export const { setAdvantages, setCheckboxGroup, setRadioGroup } = stepTwoSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default stepTwoSlice.reducer;