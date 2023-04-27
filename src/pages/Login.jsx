import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../Routes/routes";
import { useUserActions } from "../hooks/useUserActions";
import { useCajaActions } from "../hooks/useCajaActions";
import httpClient from "../utilities/httpClient";

export default function Login() {
  const navigate = useNavigate();
  const { addUser, refreshUser } = useUserActions();
  const { addCaja, refreshCaja } = useCajaActions();

  const [message, setMessage] = useState(null);

  useEffect(() => {
    refreshUser();
    refreshCaja();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    const user = {
      username,
      password,
    };

    const response = await httpClient.post("/user/login", { data: user });
    const { message, data } = response;

    if (message === "User logged in") {
      addUser({ ...data, token: Date.now().toString() });

      addCaja({ cajas: data.cajas });

      navigate(`/${PrivateRoutes.CAJAS}`, { replace: true });
    } else {
      setMessage("User not found. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" required />
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </>
  );
}
