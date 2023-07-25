import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  departureLegs: [], // buraya json web servara yüklenen datamız gelecek.
  returnLegs: [],
  ports: [],
  selectedDepLeg: [],
  selectedReturnLeg: []
};

export const getDepartureLegs = createAsyncThunk("getDepartures", async () => {
  const { data } = await axios.get("http://localhost:8000/departureLegs");
  return data;
});
export const getReturnLegs = createAsyncThunk("getReturns", async () => {
  const { data } = await axios.get("http://localhost:8000/returnLegs");
  return data;
});

export const getPorts = createAsyncThunk("getPorts", async () => {
  const { data } = await axios.get("http://localhost:8001/ports");
  return data;
});

export const flyDataSlice = createSlice({
  name: "flydata",
  initialState,
  reducers: {
    addSelectedDepLeg: (state , action) => {
      state.selectedDepLeg = action.payload
    },
    addSelectedReturnLeg : (state , action )=>{
      state.selectedReturnLeg = action.payload

    }
  },
  extraReducers: (builder) => {
    // --> fetch işlemleri gibi zaman gerektiren konularda extraReducers kullanılıyormuş.
    builder.addCase(getDepartureLegs.fulfilled, (state, action) => {
      state.departureLegs = action.payload;
    });
    builder.addCase(getReturnLegs.fulfilled, (state, action) => {
      state.returnLegs = action.payload;
    });
    builder.addCase(getPorts.fulfilled, (state, action) => {
      state.ports = action.payload;
    });
  },
});

export const {addSelectedDepLeg , addSelectedReturnLeg} = flyDataSlice.actions

export default flyDataSlice.reducer;
