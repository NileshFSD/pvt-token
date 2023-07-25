// src/features/valueSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signInUser = createAsyncThunk(
  "value/signInUser",
  async (data, { dispatch, getState }) => {
    const token = Math.ceil(Math.random() * 10000);
    dispatch(signIn(token));
  }
);

export const logOutUser = createAsyncThunk(
  "value/logOutUser",
  async (data, { dispatch, getState }) => {
    dispatch(logOut(0));
  }
);

const valueSlice = createSlice({
  name: "value",
  initialState: {
    token: 0,
  },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [signInUser.fulfilled]: (state, action) => action.payload,
    [logOutUser.fulfilled]: (state, action) => action.payload,
  },
});

export const selectIsSignIn = ({ value }) => value.token;

export const { signIn, logOut } = valueSlice.actions;

export default valueSlice.reducer;
