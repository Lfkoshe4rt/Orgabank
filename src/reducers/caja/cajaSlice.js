import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../utilities/persistLocalStorage";

const DEFAULT_STATE = {
  cajas: [],
};

const KEY = "reduxStateCaja";

const initialState = (() => {
  const persistedState = localStorage.getItem("reduxStateCaja");

  if (persistedState) {
    return JSON.parse(persistedState);
  }

  return DEFAULT_STATE;
})();

export const cajaSlice = createSlice({
  name: "caja",
  initialState,
  reducers: {
    setCaja: (state, action) => {
      persistLocalStorage(KEY, action.payload);
      return action.payload;
    },

    resetCaja: () => {
      clearLocalStorage(KEY);
      return DEFAULT_STATE;
    },

    updateCaja: (state, action) => {
      persistLocalStorage(KEY, { cajas: [...state.cajas, action.payload] });
      return { cajas: [...state.cajas, action.payload] };
    },

    rollBackCaja: (state, action) => {
      console.log(state.cajas);
      /* 
      const existeCaja = state.cajas.some()
      persistLocalStorage(KEY, action.payload);
       */
      return action.payload;
    },
  },
});

export const { setCaja, resetCaja, updateCaja, rollBackCaja } =
  cajaSlice.actions;

export default cajaSlice.reducer;
