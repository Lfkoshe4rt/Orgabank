import { replaceCaja } from "../store/slices/caja/cajaSlice";
import httpClient from "../utils/httpClient";

import { toast } from "react-toastify";
import { setCaja } from "../store/slices/caja/cajaSlice";

const generateHeader = (state) => {
  const {
    user: { token },
  } = state;

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const createCaja = (store) => (next) => async (action) => {
  const previousState = store.getState();
  const Auth = generateHeader(previousState);

  next(action);

  if (action.type === "caja/addNewCaja") {
    try {
      const res = await httpClient.post("/caja", {
        data: action.payload,
        headers: Auth,
      });

      store.dispatch(replaceCaja(res.data));

      if (res.status == "OK") toast.success("Caja registrada con suceso");
    } catch (err) {
      store.dispatch(setCaja(previousState.caja));
      toast.error("Error al intentar registrar la caja");
    }
  }
};

export const modificarCaja = (store) => (next) => async (action) => {
  const previousState = store.getState();
  const Auth = generateHeader(previousState);

  next(action);

  if (action.type === "caja/updateCaja") {
    try {
      const res = await httpClient.put("/caja", {
        data: action.payload,
        headers: Auth,
      });

      if (res.status === "OK") toast.success("Caja modificada con suceso");
    } catch (err) {
      toast.error("Error al intentar modificar la caja");
      store.dispatch(setCaja(previousState.caja));
    }
  }
};

export const eliminarCaja = (store) => (next) => async (action) => {
  const previousState = store.getState();
  const Auth = generateHeader(previousState);

  next(action);

  if (action.type === "caja/removeCaja") {
    try {
      const res = await httpClient.delete(`/caja/${action.payload}`, {
        headers: Auth,
      });

      if (res.status === "OK") toast.success("Caja eliminada con suceso");
    } catch (error) {
      toast.error("Error al intentar eliminar la caja");
      store.dispatch(setCaja(previousState.caja));
    }
  }
};
