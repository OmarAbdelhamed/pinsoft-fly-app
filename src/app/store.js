import { configureStore } from "@reduxjs/toolkit";
import FlyData from "./flyDataSlice";
import flyDetailSlice from "./flyDetailSlice";

export const store = configureStore({
  reducer: {
    data: FlyData,
    detailData: flyDetailSlice,
  },
});
