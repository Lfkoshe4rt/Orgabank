import { resetCaja, setCaja, updateCaja } from "../reducers/caja/cajaSlice";
import { useAppDispatch } from "./store";

export const useCajaActions = () => {
  const dispatch = useAppDispatch();

  const addCaja = (caja) => {
    dispatch(setCaja(caja));
  };

  const refreshCaja = () => {
    dispatch(resetCaja());
  };

  const modifyCaja = (caja) => {
    dispatch(updateCaja(caja));
  };

  return {
    addCaja,
    refreshCaja,
    modifyCaja,
  };
};
