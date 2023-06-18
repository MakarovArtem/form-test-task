import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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

export default stepOneSlice.reducer;