import { createSlice } from "@reduxjs/toolkit";
import {
  clearLocalStorage,
  persistLocalStorage,
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
      persistLocalStorage(KEY, action.payload);
      return action.payload;
    },

    replaceMovement: (state, action) => {
      const index = state.movements.findIndex(
        (item) =>
          item.createdAt === action.payload.createdAt &&
          item.user === action.payload.user
      );

      if (index >= 0) {
        state.movements[index] = action.payload;
      }
    },

    resetMovement: () => {
      clearLocalStorage(KEY);
      return DEFAULT_STATE;
    },

    updateMovement: (state, action) => {
      console.log("updateMovement");
      return;
    },

    addNewMovement: (state, action) => {
      persistLocalStorage(KEY, {
        movements: [...state.movements, action.payload],
      });
      return { movements: [...state.movements, action.payload] };
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
  addNewMovement,
  replaceMovement,
} = movementSlice.actions;

export default movementSlice.reducer;
