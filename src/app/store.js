import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import flightReducer from "./flightSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flight: flightReducer,
  },
});
