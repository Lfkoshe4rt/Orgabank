import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../Routes/routes";
import Icono from "../../../assets/images/icon.svg";
import auth from "../../../services/auth";
import {
  ButtonRegister,
  ButtonVolver,
  Container,
  Content,
  Form,
  FormMessage,
  FormRegisterStyledTitle,
  Input,
  InputGroup,
  Logo,
} from "./styled";

const FormRegister = () => {
  const [message, setMessage] = useState({
    message: "",
    type: "",
  });
  const [statusRegister, setStatusRegister] = useState("Registrarse");

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setMessage({
        message: "Las contraseñas no coinciden",
        type: "error",
      });

      return;
    }

    const user = {
      username,
      password,
    };

    try {
      setStatusRegister("Aguarde...");

      const res = await auth.register(user);

      if (res.status === "OK") {
        setMessage({
          message: "Usuario registrado correctamente",
          type: "success",
        });
        e.target.reset();
      }

      setStatusRegister("Registrarse");
    } catch (error) {
      setStatusRegister("Registrarse");
    }
  };

  return (
    <Container>
      <Content>
        <FormRegisterStyledTitle>
          <span>REGISTRO</span>
        </FormRegisterStyledTitle>
        <Form onSubmit={onSubmit} onClick={() => setMessage("")}>
          <InputGroup>
            <Input
              type="text"
              name="username"
              required
              placeholder="Usuario"
              maxLength={20}
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              maxLength={20}
              required
            />
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              maxLength={20}
              required
            />
          </InputGroup>

          <ButtonRegister>{statusRegister}</ButtonRegister>

          <FormMessage
            className="mb-4"
            color={message.type === "error" ? "red" : "#4caf50"}
          >
            {message.message}
          </FormMessage>
        </Form>

        <Logo src={Icono} alt="orgabank" />

        <ButtonVolver onClick={() => handleLoginRedirect()}>
          Volver
        </ButtonVolver>
      </Content>
    </Container>
  );
};

export default FormRegister;
