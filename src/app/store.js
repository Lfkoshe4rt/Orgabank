import { configureStore } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import cajaReducer, { replaceCaja, setCaja } from "../reducers/caja/cajaSlice";
import userReducer from "../reducers/user/userSlice";
import httpClient from "../utilities/httpClient";

const sync = (store) => (next) => async (action) => {
  const { type, payload } = action;
  const previousState = store.getState();

  next(action);

  if (type === "caja/addNewCaja") {
    try {
      const response = await httpClient.post("/caja", { data: payload });
      const { message, data } = response;

      if (message !== "Caja created") {
        throw new Error("No se puedo registrar la caja");
      }

      store.dispatch(replaceCaja(data));

      toast.success("Caja registrada con successo");
    } catch (err) {
      console.log(err);
      toast.error("Error al intentar registrar la caja");
      store.dispatch(setCaja(previousState.caja));
    }
  }

  if (type === "caja/updateCaja") {
    try {
      const response = await httpClient.put("/caja", { data: payload });
      const { status } = response;

      if (status !== "OK") {
        throw new Error("No se puedo registrar la caja");
      }

      toast.success("Caja modificada con successo");
    } catch (err) {
      console.log(err);
      toast.error("Error al intentar modificar la caja");
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
