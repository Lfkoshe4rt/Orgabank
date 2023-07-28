import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Icono from "../../../assets/images/icon.svg";

import { PrivateRoutes } from "../../../Routes/routes";

import { useCajaActions } from "../../../hooks/useCajaActions";
import { useUserActions } from "../../../hooks/useUserActions";
import { useMovementActions } from "../../../hooks/useMovementActions";

import httpClient from "../../../utils/httpClient";

import {
  FormLoginStyled,
  FormLoginStyledError,
  FormLoginStyledTitle,
} from "./styled/styled";

const FormLogin = () => {
  const navigate = useNavigate();
  const { addUser } = useUserActions();
  const { addCaja } = useCajaActions();
  const { addMovement } = useMovementActions();

  const [message, setMessage] = useState(null);
  const [statusLogin, setStatusLogin] = useState("Login");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    setStatusLogin("Cargando...");

    const user = {
      username,
      password,
    };

    try {
      const response = await httpClient.post("/auth", { data: user });

      const { status, data } = response;

      if (status === "OK") {
        const { cajas, movements } = data;

        setStatusLogin("Login");

        addUser(data);

        addCaja({ cajas });

        addMovement({ movements });

        navigate(`/${PrivateRoutes.CAJAS}`, { replace: true });
      }
    } catch (error) {
      const { status } = error.response.data;

      if (status === "FAILED") {
        setMessage("Usuario o contraseña incorrectos");
        setStatusLogin("Login");
        e.target.reset();
      }
    }
  };

  const removeMessage = () => {
    setMessage(null);
  };

  return (
    <FormLoginStyled>
      <form onSubmit={onSubmit}>
        <FormLoginStyledTitle>
          <span>ORGA BANK</span>
        </FormLoginStyledTitle>
        <input
          type="text"
          onClick={removeMessage}
          name="username"
          placeholder="Usuario"
          required
        />
        <input
          onClick={removeMessage}
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button type="submit">{statusLogin}</button>

        <FormLoginStyledError>{message}</FormLoginStyledError>
        <img src={Icono} alt="orgabank" />
      </form>
    </FormLoginStyled>
  );
};
export default FormLogin;
