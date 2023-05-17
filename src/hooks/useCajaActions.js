import {
  resetCaja,
  setCaja,
  updateCaja as updateOneCaja,
  addNewCaja as addOneCaja,
} from "../reducers/caja/cajaSlice";
import { useAppDispatch } from "./store";

export const useCajaActions = () => {
  const dispatch = useAppDispatch();

  const addCaja = (caja) => {
    dispatch(setCaja(caja));
  };

  const updateCaja = (caja) => {
    dispatch(updateOneCaja(caja));
  };

  const refreshCaja = () => {
    dispatch(resetCaja());
  };

  const addNewCaja = (caja) => {
    dispatch(addOneCaja(caja));
  };

  return {
    addCaja,
    refreshCaja,
    addNewCaja,
    updateCaja,
  };
};
