import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "store/reducers/mainSlice";
import stepOneReducer from "store/reducers/stepOneSlice";
import stepTwoReducer from "store/reducers/stepTwoSlice";
import stepThreeReducer from "store/reducers/stepThreeSlice";
import validReducer from "store/reducers/validSlice";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer,
    stepThree: stepThreeReducer,
    valid: validReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;