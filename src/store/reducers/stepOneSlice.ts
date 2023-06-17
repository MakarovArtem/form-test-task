import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface stepOneSlice {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
}

const initialState: stepOneSlice = {
  nickname: "EineApfelsine",
  name: "Artem",
  surname: "Makarov",
  sex: "man",
}

export const stepOneSlice = createSlice({
  name: 'stepOne',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setSurname: (state, action: PayloadAction<string>) => {
      state.surname = action.payload
    },
    setSex: (state, action: PayloadAction<string>) => {
      state.sex = action.payload
    },
  },
})

export const { setNickname, setName, setSurname, setSex } = stepOneSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default stepOneSlice.reducer;