import {
  resetCaja,
  setCaja,
  updateCaja as updateOneCaja,
  addNewCaja as addOneCaja,
  removeCaja as removeOneCaja,
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

  const removeCaja = (caja) => {
    dispatch(removeOneCaja(caja));
  };

  return {
    addCaja,
    refreshCaja,
    addNewCaja,
    updateCaja,
    removeCaja,
  };
};
