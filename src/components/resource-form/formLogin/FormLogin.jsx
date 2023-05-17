import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        addUser({ ...data, token: Date.now().toString() });

        addCaja({ cajas: data.cajas });

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

  return (
    <FormLoginStyled>
      <form onSubmit={onSubmit}>
        <FormLoginStyledTitle>
          <span>ORGA BANK</span>
        </FormLoginStyledTitle>
        <input type="text" name="username" placeholder="Usuario" required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button type="submit">Login</button>
        <FormLoginStyledError>{message}</FormLoginStyledError>
      </form>
    </FormLoginStyled>
  );
};
export default FormLogin;
