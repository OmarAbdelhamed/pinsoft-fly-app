import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  departureLegs: [], // buraya json web servara yüklenen datamız gelecek.
  returnLegs: [],
  ports: [],
  selectedDepFlight: {},
  selectedRetFlight: {},
  selectedAdult: {},
  selectedChild: {},
};

export const getDepartureLegs = createAsyncThunk('getDepartures', async () => {
  const { data } = await axios.get('http://localhost:8181/travels/departure');
  return data;
});
export const getReturnLegs = createAsyncThunk('getReturns', async () => {
  const { data } = await axios.get('http://localhost:8181/travels/return');
  return data;
});

export const getPorts = createAsyncThunk('getPorts', async () => {
  const { data } = await axios.get('http://localhost:8181/air-ports');
  return data;
});

export const flyDataSlice = createSlice({
  name: 'flydata',
  initialState,
  reducers: {
    addSelectedDepFlight: (state, action) => {
      state.selectedDepFlight = action.payload;
    },
    addSelectedRetFlight: (state, action) => {
      state.selectedRetFlight = action.payload;
    },
    addSelectedAdult: (state, action) => {
      state.selectedAdult = action.payload;
    },
    addSelectedChild: (state, action) => {
      state.selectedChild = action.payload;
    },
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

export const {
  addSelectedDepFlight,
  addSelectedRetFlight,
  addSelectedAdult,
  addSelectedChild,
} = flyDataSlice.actions;

export default flyDataSlice.reducer;
