import { createSlice } from "@reduxjs/toolkit";
import {
  persistLocalStorage,
  clearLocalStorage,
} from "../../utilities/persistLocalStorage";

const DEFAULT_STATE = {
  movements: [],
};

const KEY = "reduxStateMovement";

const initialState = (() => {
  const persistedState = localStorage.getItem("reduxStateMovement");

  if (persistedState) {
    return JSON.parse(persistedState);
  }

  return DEFAULT_STATE;
})();

export const movementSlice = createSlice({
  name: "movement",
  initialState,
  reducers: {
    setMovement: (state, action) => {
      console.log("a");
      persistLocalStorage(KEY, action.payload);
      return action.payload;
    },

    resetMovement: () => {
      clearLocalStorage(KEY);
      return DEFAULT_STATE;
    },

    updateMovement: (state, action) => {
      console.log("updateMovement");
      return;
    },

    updateMovementUser: (state, action) => {
      console.log("updateMovementUser");
      return;
    },
  },
});

export const {
  setMovement,
  resetMovement,
  updateMovement,
  updateMovementUser,
} = movementSlice.actions;

export default movementSlice.reducer;
