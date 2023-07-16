import {
  setMovement,
  resetMovement,
  updateMovement,
  updateMovementUser,
  addNewMovement,
} from "../reducers/movement/movementSlice";

import { useAppDispatch } from "./store";

export const useMovementActions = () => {
  const dispatch = useAppDispatch();

  const addMovement = (movement) => {
    dispatch(setMovement(movement));
  };

  const addOneMovement = (movement) => {
    dispatch(addNewMovement(movement));
  };

  const refreshMovement = () => {
    dispatch(resetMovement());
  };

  const modifyMovement = (user) => {
    dispatch(updateMovement(user));
  };

  const ModifyUserMovement = (cajas) => {
    dispatch(updateMovementUser(cajas));
  };

  return {
    addMovement,
    ModifyUserMovement,
    modifyMovement,
    refreshMovement,
    addOneMovement,
  };
};
