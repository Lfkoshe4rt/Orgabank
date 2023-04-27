import { createSlice } from "@reduxjs/toolkit";
import {
  persistLocalStorage,
  clearLocalStorage,
} from "../../utilities/persistLocalStorage";

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
      persistLocalStorage(KEY, { ...state, cajas });
      return { ...state, ...action.payload };
    },

    updateCajaUser: (state, action) => {
      const cajas = [...state.cajas, action.payload];

      //persistLocalStorage(KEY, { ...state, cajas });

      return { ...state, cajas };
    },
  },
});

export const { setUser, resetUser, updateUser, updateCajaUser } =
  userSlice.actions;

export default userSlice.reducer;
