import { toast } from "react-toastify";
import { replaceMovement } from "../slices/movement/movementSlice";
import movements from "../../services/movements";

export const createMovement = (store) => (next) => async (action) => {
  const previousState = store.getState();

  next(action);
  if (action.type === "movement/addNewMovement") {
    try {
      const res = await movements.create(
        action.payload,
        previousState.user.token
      );

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
  next(action);
  if (action.type === "movement/removeMovement") {
    try {
      const res = await movements.remove(
        action.payload,
        previousState.user.token
      );
      if (res.status === "OK") toast.success("Movimiento eliminado con suceso");
    } catch (err) {
      toast.error(err.data.message);
    }
  }
};
