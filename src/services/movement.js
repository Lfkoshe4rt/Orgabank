import { toast } from "react-toastify";
import { replaceMovement } from "../store/slices/movement/movementSlice";
import httpClient from "../utils/httpClient";

export const createMovement = (store) => (next) => async (action) => {
  const { type, payload } = action;
  next(action);
  if (type === "movement/addNewMovement") {
    try {
      const res = await httpClient.post("/movement", { data: payload });

      store.dispatch(replaceMovement(res.data));

      if (res.status === "OK") toast.success("Movimiento realizado con suceso");
    } catch (err) {
      const { message } = err.response.data;
      toast.error(message);
    }
  }
};

export const removeOneMovement = (store) => (next) => async (action) => {
  const { type, payload } = action;
  next(action);
  if (type === "movement/removeMovement") {
    try {
      const res = await httpClient.delete(`movement/${payload}`);
      if (res.status === "OK") toast.success("Movimiento eliminado con suceso");
    } catch (err) {
      const { data } = err.response;
      toast.error(data.message);
    }
  }
};
