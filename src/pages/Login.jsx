import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../Routes/routes";
import { useUserActions } from "../hooks/useUserActions";

export default function Login() {
  const navigate = useNavigate();
  const { addUser, refreshUser } = useUserActions();

  useEffect(() => {
    refreshUser();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    addUser({
      username,
      password,
      token: Date.now().toString(),
      cajas: [
        {
          alias: "Caja 1",
          saldo: 500,
          banco: "ITAU",
          moneda: "UYU",
        },
        {
          alias: "Caja 2",
          saldo: 500,
          banco: "ITAU",
          moneda: "UYU",
        },

        {
          alias: "Caja 3",
          saldo: 100,
          banco: "ITAU",
          moneda: "R$",
        },

        {
          alias: "Caja 5",
          saldo: 100,
          banco: "ITAU",
          moneda: "USD",
        },
      ],
    });

    navigate(`/${PrivateRoutes.CAJAS}`, { replace: true });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" required />
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
