import { configureStore } from "@reduxjs/toolkit";
import stdSlice, { StdState } from "@/features/stdSlice";

export interface RootState {
  stdSlice : StdState;
}

const store = configureStore({
  // reducer: authSlice
  reducer : {
    stdSlice
  }
})

export default store;