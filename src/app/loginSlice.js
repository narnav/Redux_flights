import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doLogin } from "./loginAPI";
import jwt_decode from "jwt-decode";

const initialState = {
  loginStatus: false,
  token: "",
  username: "",
};

// // call the methods in the API
// export const getloginsAsync = createAsyncThunk(
//   "login/getlogins",
//   async () => {
//     const response = await getlogins();
//     return response.data;
//   }
// );

// // call the methods in the API
export const doLoginAsync = createAsyncThunk(
  "login/doLogin",
  async (newlogin) => {
    const response = await doLogin(newlogin);
    return response.data;
  }
);
// // call the methods in the API
// export const deleteloginAsync = createAsyncThunk(
//   "login/deletelogin",
//   async (id) => {
//     console.log(id);
//     const response = await deletelogin(id.id);
//     return id.id;
//   }
// );

// call the methods in the API
// export const updloginAsync = createAsyncThunk(
//   "login/updlogin",
//   async (newlogin) => {
//     let newBody = {
//       destination: newlogin.destination,
//       companyName: newlogin.companyName,
//     };
//     let id = newlogin.id;
//     const response = await updlogin(newBody, id);
//     return response.data;
//   }
// );

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    checkLogin: (state) => {
      let myToken = localStorage.getItem("token");
      if (myToken) {
        state.loginStatus = true;
        state.username = jwt_decode(myToken).username;
      }
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.loginStatus = false;
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doLoginAsync.fulfilled, (state, action) => {
      console.log(action.payload.access);
      state.token = action.payload.access;
      localStorage.setItem("token", state.token);
      state.status = "loading";
      state.loginStatus = true;
      state.username = jwt_decode(state.token).username;
    });
  },
});

export const { checkLogin,logout } = loginSlice.actions;
export const selectlogin = (state) => state.login.loginStatus;
export const selectToken = (state) => state.login.token;
export const selectUsername = (state) => state.login.username;
export default loginSlice.reducer;
