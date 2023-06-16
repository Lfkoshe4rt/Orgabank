import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Icono from "../../../assets/images/icon.svg";

import { PrivateRoutes } from "../../../Routes/routes";
import { useCajaActions } from "../../../hooks/useCajaActions";

import { useUserActions } from "../../../hooks/useUserActions";

import httpClient from "../../../utilities/httpClient";

import {
  FormLoginStyled,
  FormLoginStyledError,
  FormLoginStyledTitle,
} from "./styled/styled";

const FormLogin = () => {
  const navigate = useNavigate();
  const { addUser } = useUserActions();
  const { addCaja } = useCajaActions();

  const [message, setMessage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    const user = {
      username,
      password,
    };

    try {
      const response = await httpClient.post("/user/login", { data: user });

      const { status, data } = response;

      if (status === "OK") {
        const { user, token } = data;

        addUser({ ...user, token });

        addCaja({ cajas: user.cajas });

        navigate(`/${PrivateRoutes.CAJAS}`, { replace: true });
      }
    } catch (error) {
      const { status } = error.response.data;

      if (status === "FAILED") {
        setMessage("Usuario o contraseña incorrectos");
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
        <button type="submit">Login</button>

        <FormLoginStyledError>{message}</FormLoginStyledError>
        <img src={Icono} alt="orgabank" />
      </form>
    </FormLoginStyled>
  );
};
export default FormLogin;
