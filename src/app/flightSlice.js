import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFlights, addFlight, updFlight } from "./flightAPI";

const initialState = {
  status: "idle",
  flights: [],
};

// call the methods in the API
export const getFlightsAsync = createAsyncThunk(
  "flight/getFlights",
  async () => {
    const response = await getFlights();
    return response.data;
  }
);

// call the methods in the API
export const addFlightAsync = createAsyncThunk(
  "flight/addFlight",
  async (newFlight) => {
    const response = await addFlight(newFlight);
    return response.data;
  }
);

// call the methods in the API
export const updFlightAsync = createAsyncThunk(
  "flight/updFlight",
  async (newFlight) => {
    let newBody = {
      destination: newFlight.destination,
      companyName: newFlight.companyName,
    };
    let id = newFlight.id;
    const response = await updFlight(newBody, id);
    return response.data;
  }
);

export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlightsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFlightsAsync.fulfilled, (state, action) => {
        state.flights = action.payload;
      })
      .addCase(addFlightAsync.fulfilled, (state, action) => {
        state.flights.push(action.payload);
      })
      .addCase(updFlightAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        let updFlight = state.flights.find(
          (flight) => flight.id === action.payload.id
        );
        updFlight.destination = action.payload.destination;
        updFlight.companyName = action.payload.companyName;
      });
  },
});

export const {} = flightSlice.actions;
export const selectFlights = (state) => state.flight.flights;
export default flightSlice.reducer;
