import httpClient from "../../../utils/httpClient";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PublicRoutes } from "../../../Routes/routes";
import {
  FormRegisterStyled,
  ButtonRegister,
  ButtonVolver,
  FormRegisterStyledTitle,
  FormRegisterStyledError,
  FormMessageSuccess,
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
      setMessage("Error al registrar el usuario");
      setStatusRegister("Registrarse");
      errors.username = "El nombre de usuario no se encuentra disponible ";
      setErrors(errors);
    }
  };

  return (
    <FormRegisterStyled>
      <form
        onSubmit={onSubmit}
        onClick={() => {
          setMessage("");
          setErrors(initialState);
        }}
      >
        <FormRegisterStyledTitle>
          <span>Registro</span>
        </FormRegisterStyledTitle>
        <FormMessageSuccess>{message}</FormMessageSuccess>
        <input type="text" name="username" required placeholder="Usuario" />
        {errors.username && (
          <FormRegisterStyledError>{errors.username}</FormRegisterStyledError>
        )}
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        {errors.password && (
          <FormRegisterStyledError>{errors.password} </FormRegisterStyledError>
        )}
        <input
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
        <input type="text" name="email" placeholder="Email" required />
        {errors.email && (
          <FormRegisterStyledError>{errors.email}</FormRegisterStyledError>
        )}
        <ButtonRegister>{statusRegister}</ButtonRegister>

        <ButtonVolver onClick={() => handleLoginRedirect()}>
          Volver
        </ButtonVolver>
      </form>
    </FormRegisterStyled>
  );
};

export default FormRegister;
