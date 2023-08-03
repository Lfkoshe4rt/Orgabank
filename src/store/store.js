import { configureStore } from "@reduxjs/toolkit";
import cajaReducer from "./slices/caja/cajaSlice";
import movementReducer from "./slices/movement/movementSlice";
import userReducer from "./slices/user/userSlice";

import { createCaja, eliminarCaja, modificarCaja } from "../services/caja";
import { createMovement, removeOneMovement } from "../services/movement";

export default configureStore({
  reducer: {
    user: userReducer,
    caja: cajaReducer,
    movement: movementReducer,
  },
  middleware: [
    createMovement,
    removeOneMovement,
    createCaja,
    modificarCaja,
    eliminarCaja,
  ],
});
