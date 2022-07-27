import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getnotes } from "./noteAPI";

const initialState = {
  notes: [],
};

// // call the methods in the API
export const getNoteAsync = createAsyncThunk(
  "note/getnotes",
  async () => {
    const response = await getnotes();
    return response.data;
  }
);

// // call the methods in the API
// export const addFlightAsync = createAsyncThunk(
//   "flight/addFlight",
//   async (newFlight) => {
//     const response = await addFlight(newFlight);
//     return response.data;
//   }
// );
// // call the methods in the API
// export const deleteFlightAsync = createAsyncThunk(
//   "flight/deleteFlight",
//   async (id) => {
//     console.log(id);
//     const response = await deleteFlight(id.id);
//     return id.id;
//   }
// );

// // call the methods in the API
// export const updFlightAsync = createAsyncThunk(
//   "flight/updFlight",
//   async (newFlight) => {
//     let newBody = {
//       destination: newFlight.destination,
//       companyName: newFlight.companyName,
//     };
//     let id = newFlight.id;
//     const response = await updFlight(newBody, id);
//     return response.data;
//   }
// );

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getNoteAsync.fulfilled, (state,action) => {
        state.notes = action.payload
        console.log(action.payload)
    });
  },
});

export const {} = noteSlice.actions;
export const selectnotes = (state) => state.note.notes;
export default noteSlice.reducer;
