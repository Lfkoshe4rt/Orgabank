import {
  setMovement,
  resetMovement,
  updateMovement,
  updateMovementUser,
  addNewMovement,
  removeMovement,
  replaceMovement,
} from "../store/slices/movement/movementSlice";

import { useAppDispatch } from "./store";

export const useMovementActions = () => {
  const dispatch = useAppDispatch();

  const addMovement = (movement) => {
    dispatch(setMovement(movement));
  };

  const replaceOneMovement = (movement) => {
    dispatch(replaceMovement(movement));
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

  const removeOneMovement = (id) => {
    dispatch(removeMovement(id));
  };

  return {
    removeOneMovement,
    addMovement,
    ModifyUserMovement,
    modifyMovement,
    refreshMovement,
    addOneMovement,
    replaceOneMovement,
  };
};
