import { configureStore } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import cajaReducer, { replaceCaja, setCaja } from "../reducers/caja/cajaSlice";
import userReducer from "../reducers/user/userSlice";
import movementReducer, {
  replaceMovement,
} from "../reducers/movement/movementSlice";
import httpClient from "../utilities/httpClient";

const sync = (store) => (next) => async (action) => {
  const { type, payload } = action;
  const previousState = store.getState();
  const { user } = previousState;
  const token = user.token;

  const Authorization = { Authorization: `Bearer ${token}` };

  next(action);

  if (type === "movement/addNewMovement") {
    try {
      const response = await httpClient.post("/movement", { data: payload });
      const { status, data } = response;

      if (status !== "OK") {
        throw new Error();
      }

      store.dispatch(replaceMovement(data));

      toast.success("Movimiento registrado con successo");
    } catch (err) {
      const { message } = err.response.data;
      toast.error(message);
    }
  }

  if (type === "caja/addNewCaja") {
    try {
      const response = await httpClient.post("/caja", {
        data: payload,
        headers: Authorization,
      });
      const { data } = response;

      store.dispatch(replaceCaja(data));

      toast.success("Caja registrada con successo");
    } catch (err) {
      const { message } = err.response.data;
      toast.error(message);
      store.dispatch(setCaja(previousState.caja));
    }
  }

  if (type === "caja/updateCaja") {
    try {
      const response = await httpClient.put("/caja", {
        data: payload,
        headers: Authorization,
      });
      const { status } = response;

      toast.success("Caja modificada con successo");
    } catch (err) {
      console.log(err);
      toast.error("Error al intentar modificar la caja");
      store.dispatch(setCaja(previousState.caja));
    }
  }

  if (type === "caja/removeCaja") {
    try {
      const response = await httpClient.delete(`/caja/${payload}`, {
        headers: Authorization,
      });

      const { status } = response;

      if (status !== "OK") {
        throw new Error();
      }

      toast.success("Caja eliminada con successo");
    } catch (error) {
      console.log(error);
      toast.error("Error al intentar eliminar la caja");

      store.dispatch(setCaja(previousState.caja));
    }
  }
};

export default configureStore({
  reducer: {
    user: userReducer,
    caja: cajaReducer,
    movement: movementReducer,
  },
  middleware: [sync],
});
