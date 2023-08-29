import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/store";
import { useCajaActions } from "../../hooks/useCajaActions";
import { useUserActions } from "../../hooks/useUserActions";

const AuthToken = ({ children }) => {
  const [timer, setTimer] = useState(null);

  const { token } = useAppSelector((state) => state.user);
  const { refreshUser } = useUserActions();
  const { refreshCaja } = useCajaActions();

  useEffect(() => {
    if (token) {
      const decodedToken = jwt_decode(token);

      const myTimer = setTimeout(() => {
        refreshUser();
        refreshCaja();
        alert("Sesión expirada, por favor vuelva a iniciar sesión");
      }, decodedToken.exp * 1000 - Date.now());

      setTimer(myTimer);
    }

    if (!token) clearTimeout(timer);
  }, [token]);

  return children;
};

export default AuthToken;
