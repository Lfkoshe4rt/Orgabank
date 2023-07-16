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
} = movementSlice.actions;

export default movementSlice.reducer;
