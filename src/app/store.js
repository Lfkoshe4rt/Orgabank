import { configureStore } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import cajaReducer, { setCaja } from "../reducers/caja/cajaSlice";
import userReducer from "../reducers/user/userSlice";
import httpClient from "../utilities/httpClient";

const sync = (store) => (next) => async (action) => {
  const { type, payload } = action;
  const previousState = store.getState();

  next(action);

  if (type === "caja/updateCaja") {
    try {
      const response = await httpClient.post("/caja", { data: payload });
      const { message } = response;

      if (message !== "Caja created") {
        throw new Error("No se puedo registrar la caja");
      }

      toast.success("Caja registrada con successo");
    } catch (err) {
      console.log(err);
      toast.error("Error al intentar registrar la caja");
      store.dispatch(setCaja(previousState.caja));
    }
  }
};

export default configureStore({
  reducer: {
    user: userReducer,
    caja: cajaReducer,
  },
  middleware: [sync],
});
