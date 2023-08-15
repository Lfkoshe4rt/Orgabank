import { toast } from "react-toastify";
import { replaceMovement } from "../slices/movement/movementSlice";
import httpClient from "../../utils/httpClient";
const generateHeader = (state) => {
  const {
    user: { token },
  } = state;

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const createMovement = (store) => (next) => async (action) => {
  const previousState = store.getState();
  const Auth = generateHeader(previousState);

  next(action);
  if (action.type === "movement/addNewMovement") {
    try {
      const res = await httpClient.post("/movement", {
        data: action.payload,
        headers: Auth,
      });

      store.dispatch(replaceMovement(res.data));

      if (res.status === "OK") toast.success("Movimiento realizado con suceso");
    } catch (err) {
      const { message } = err.response.data;
      toast.error(message);
    }
  }
};

export const removeOneMovement = (store) => (next) => async (action) => {
  const previousState = store.getState();
  const Auth = generateHeader(previousState);
  next(action);
  if (action.type === "movement/removeMovement") {
    try {
      const res = await httpClient.delete(`movement/${action.payload}`, {
        headers: Auth,
      });
      if (res.status === "OK") toast.success("Movimiento eliminado con suceso");
    } catch (err) {
      toast.error(err.data.message);
    }
  }
};
