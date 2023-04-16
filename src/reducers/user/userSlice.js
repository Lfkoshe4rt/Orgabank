import { createSlice } from "@reduxjs/toolkit";
import {
  persistLocalStorage,
  clearLocalStorage,
} from "../../hooks/persistLocalStorage";

const DEFAULT_STATE = {
  username: null,
  password: null,
  token: null,
  cajas: [],
};

const KEY = "reduxState";

const initialState = (() => {
  const persistedState = localStorage.getItem("reduxState");

  if (persistedState) {
    return JSON.parse(persistedState);
  }

  return DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      persistLocalStorage(KEY, action.payload);
      return action.payload;
    },

    resetUser: () => {
      clearLocalStorage(KEY);
      return DEFAULT_STATE;
    },

    updateUser: (state, action) => {
      const { cajas } = action.payload;

      persistLocalStorage(KEY, { ...state, cajas });

      return { ...state, ...action.payload };
    },
  },
});

export const { setUser, resetUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
