import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passengerDetail: {},
};

export const flyDetailSlice = createSlice({
  name: "flyDetailSlice",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      console.log("Handling action in reducer:", action);
      state.passengerDetail = action.payload;
    },
  },
});

export const { setDetail } = flyDetailSlice.actions;

export default flyDetailSlice.reducer;
