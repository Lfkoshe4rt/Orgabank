import { toast } from "react-toastify";
import caja from "../../services/caja";
import { replaceCaja, setCaja } from "../slices/caja/cajaSlice";

export const createCaja = (store) => (next) => async (action) => {
  const previousState = store.getState();
  next(action);
  if (action.type === "caja/addNewCaja") {
    try {
      const res = await caja.create(action.payload, previousState.user.token);
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
  next(action);
  if (action.type === "caja/updateCaja") {
    try {
      const res = await caja.update(action.payload, previousState.user.token);
      if (res.status === "OK") toast.success("Caja modificada con suceso");
    } catch (err) {
      console.log(err);
      toast.error("Error al intentar modificar la caja");
      store.dispatch(setCaja(previousState.caja));
    }
  }
};

export const eliminarCaja = (store) => (next) => async (action) => {
  const previousState = store.getState();
  next(action);
  if (action.type === "caja/removeCaja") {
    try {
      const res = await caja.remove(action.payload, previousState.user.token);
      if (res.status === "OK") toast.success("Caja eliminada con suceso");
    } catch (error) {
      toast.error("Error al intentar eliminar la caja");
      store.dispatch(setCaja(previousState.caja));
    }
  }
};
