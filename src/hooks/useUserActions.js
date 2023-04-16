import { resetUser, setUser, updateUser } from "../reducers/user/userSlice";
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

  return {
    addUser,
    refreshUser,
    modifyUser,
  };
};
