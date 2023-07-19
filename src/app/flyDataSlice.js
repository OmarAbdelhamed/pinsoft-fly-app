import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  departureLegs: [], // buraya json web servara yüklenen datamız gelecek.
  returnLegs: []
};

export const getDepartureLegs = createAsyncThunk("getDepartures" , async ()=>{
  const {data} = await axios.get("http://localhost:8000/departureLegs")
  return data;
})
export const getReturnLegs = createAsyncThunk("getReturns" , async ()=>{
  const {data} = await axios.get("http://localhost:8000/returnLegs")
  return data;
})

export const flyDataSlice = createSlice({
  name: "flydata",
  initialState,
  reducers: {
  },
  extraReducers:(builder)=>{  // --> fetch işlemleri gibi zaman gerektiren konularda extraReducers kullanılıyormuş.
    builder.addCase(getDepartureLegs.fulfilled , (state , action)=>{
      state.departureLegs = action.payload
    })
    builder.addCase(getReturnLegs.fulfilled , (state , action)=>{
      state.returnLegs = action.payload
    })
  }
});

export default flyDataSlice.reducer;
