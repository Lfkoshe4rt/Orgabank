import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icono from "../../../assets/images/icon.svg";
import { useCajaActions } from "../../../hooks/useCajaActions";
import { useMovementActions } from "../../../hooks/useMovementActions";
import { useUserActions } from "../../../hooks/useUserActions";
import { PrivateRoutes, PublicRoutes } from "../../../Routes/routes";

import auth from "../../../services/auth";

import {
  ButtonLogin,
  Content,
  Form,
  Logo,
  Input,
  InputGroup,
  ButtonRegister,
  FormLoginStyledError,
  FormLoginStyledTitle,
  Container,
} from "./styled/styled";

const FormLogin = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [statusLogin, setStatusLogin] = useState("Login");

  const { addUser } = useUserActions();
  const { addCaja } = useCajaActions();
  const { addMovement } = useMovementActions();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    setStatusLogin("Ingresando...");
    const response = await auth.login({ username, password });

    if (response.status === "OK") {
      const { cajas, movements } = response.data;

      addUser(response.data);
      addCaja({ cajas });
      addMovement({ movements });

      navigate(`/${PrivateRoutes.CAJAS}`, { replace: true });
    } else {
      setMessage("Usuario o contraseña incorrecta");

      setStatusLogin("Login");
    }
  };

  const removeMessage = () => {
    setMessage(null);
  };

  const redirectRegister = () => {
    navigate(`/${PublicRoutes.REGISTER}`, { replace: true });
  };

  return (
    <Container>
      <Content>
        <FormLoginStyledTitle>
          <span>ORGA BANK</span>
        </FormLoginStyledTitle>
        <Form onSubmit={onSubmit} onClick={removeMessage}>
          <InputGroup>
            <Input type="text" name="username" placeholder="Usuario" required />
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
          </InputGroup>
          <ButtonLogin type="submit">{statusLogin}</ButtonLogin>
          <FormLoginStyledError>{message}</FormLoginStyledError>
        </Form>
        <Logo src={Icono} alt="orgabank" />
        <ButtonRegister onClick={() => redirectRegister()}>
          Registrarse
        </ButtonRegister>
      </Content>
    </Container>
  );
};

export default FormLogin;
