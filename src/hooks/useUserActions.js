import {
  resetUser,
  setUser,
  updateUser,
  updateCajaUser,
} from "../store/slices/user/userSlice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const addUser = (user) => {
    dispatch(setUser(user));
  };

  const refreshUser = () => {
    dispatch(resetUser());
  };

  const modifyUser = (user) => {
    dispatch(updateUser(user));
  };

  const modifyCajaUser = (cajas) => {
    dispatch(updateCajaUser(cajas));
  };

  return {
    addUser,
    refreshUser,
    modifyUser,
    modifyCajaUser,
  };
};
