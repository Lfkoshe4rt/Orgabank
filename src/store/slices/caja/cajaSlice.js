import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  persistLocalStorage,
} from "../../../utils/persistLocalStorage";

const DEFAULT_STATE = {
  cajas: [],
};

const KEY = "reduxStateCaja";

const initialState = (() => {
  const persistedState = localStorage.getItem(KEY);

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
      const index = state.cajas.findIndex(
        (item) => item._id === action.payload._id
      );
      if (index >= 0) {
        state.cajas[index] = action.payload;
      }

      persistLocalStorage(KEY, state);
      return state;
    },

    updateMovementCaja: (state, action) => {
      console.log("aaa");
      const index = state.cajas.findIndex(
        (item) => item._id === action.payload._id
      );

      if (index >= 0) {
        state.cajas[index] = action.payload;
      }

      persistLocalStorage(KEY, state);
      return state;
    },

    addNewCaja: (state, action) => {
      persistLocalStorage(KEY, { cajas: [...state.cajas, action.payload] });
      return { cajas: [...state.cajas, action.payload] };
    },

    removeCaja: (state, action) => {
      const index = state.cajas.findIndex(
        (item) => item._id === action.payload
      );

      if (index >= 0) {
        state.cajas.splice(index, 1);
      }

      persistLocalStorage(KEY, state);
      return state;
    },

    rollBackCaja: (state, action) => {
      /* 
      const existeCaja = state.cajas.some()
      persistLocalStorage(KEY, action.payload);
       */
      return action.payload;
    },

    replaceCaja: (state, action) => {
      const index = state.cajas.findIndex(
        (item) => item.alias === action.payload.alias
      );

      if (index >= 0) {
        state.cajas[index] = action.payload;
      }

      persistLocalStorage(KEY, state);
      return state;
    },
  },
});

export const {
  setCaja,
  resetCaja,
  addNewCaja,
  rollBackCaja,
  updateCaja,
  replaceCaja,
  removeCaja,
  updateMovementCaja,
} = cajaSlice.actions;

export default cajaSlice.reducer;
