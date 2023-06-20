import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/mainSlice";
import stepOneReducer from "./reducers/stepOneSlice";
import stepTwoReducer from "./reducers/stepTwoSlice";
import stepThreeReducer from "./reducers/stepThreeSlice";
import validReducer from "./reducers/stepThreeSlice";

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