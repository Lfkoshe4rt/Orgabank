import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../utilities/localstorage.utility";

let initialState = {
  username: null,
  password: null,
  token: null,
  cajas: [],
};

const key = "user";

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : initialState,

  reducers: {
    setUser: (state, action) => {
      persistLocalStorage(key, action.payload);
      return action.payload;
    },

    resetUser: () => {
      clearLocalStorage(key);
      return initialState;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
