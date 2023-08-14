import httpClient from "../../../utils/httpClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../Routes/routes";
import Icono from "../../../assets/images/icons/icon-128x128.png";
import {
  Content,
  ButtonRegister,
  ButtonVolver,
  FormRegisterStyledTitle,
  FormRegisterStyledError,
  FormMessageSuccess,
  InputGroup,
  Logo,
  Form,
  Container,
  Input,
} from "./styled/styled";

const FormRegister = () => {
  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  };

  const [errors, setErrors] = useState(initialState);
  const [message, setMessage] = useState("");
  const [statusRegister, setStatusRegister] = useState("Registrarse");

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  const verifyEqualsPassword = (password, verifyPassword) => {
    if (password !== verifyPassword) {
      return false;
    }

    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = { ...initialState };

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const email = formData.get("email");

    if (!verifyEqualsPassword(password, confirmPassword)) {
      errors.confirmPassword = "Las contraseñas no coinciden";
      setErrors(errors);
      return;
    }

    const user = {
      username,
      password,
      email,
    };

    try {
      setStatusRegister("Registrando...");
      const res = await httpClient.post("/user", { data: user });
      setMessage("Usuario registrado con éxito");
      setStatusRegister("Registrarse");
      e.target.reset();
    } catch (error) {
      setStatusRegister("Registrarse");
      errors.username = "El nombre de usuario no se encuentra disponible ";
      setErrors(errors);
    }
  };

  return (
    <Container>
      <Content>
        <FormRegisterStyledTitle>
          <span>REGISTRO</span>
        </FormRegisterStyledTitle>
        <Form
          onSubmit={onSubmit}
          onClick={() => {
            setMessage("");
            setErrors(initialState);
          }}
        >
          <InputGroup>
            <Input type="text" name="username" required placeholder="Usuario" />
            {errors.username && (
              <FormRegisterStyledError>
                {errors.username}
              </FormRegisterStyledError>
            )}
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
            {errors.password && (
              <FormRegisterStyledError>
                {errors.password}
              </FormRegisterStyledError>
            )}
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              required
            />
            {errors.confirmPassword && (
              <FormRegisterStyledError>
                {errors.confirmPassword}
              </FormRegisterStyledError>
            )}
          </InputGroup>

          <ButtonRegister>{statusRegister}</ButtonRegister>
          <FormMessageSuccess>{message}</FormMessageSuccess>
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
