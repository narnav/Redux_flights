import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import flightReducer from "./flightSlice";
import loginReducer from "./loginSlice";
import  noteSlice  from "./noteSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    flight: flightReducer,
    login: loginReducer,
    note:noteSlice
  },
});
