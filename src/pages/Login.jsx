import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetUser, setUser } from "../reducers/user/userSlice";
import { PrivateRoutes, PublicRoutes } from "../Routes/routes";
import { clearLocalStorage } from "../utilities/localstorage.utility";

export default function Login() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    clearLocalStorage("user");
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const [user, setValuesUSer] = useState({
    username: "",
    password: "",
    cajas: [{
      "alias": "Caja 1",
      "saldo": 1000000,
      "banco": "ITAU",
      "moneda": "UYU"
    },

    {
      "alias": "Caja 2",
      "saldo": 6000,
      "banco": "ITAU",
      "moneda": "R$"
    },

    {
      "alias": "Caja 3",
      "saldo": 2324,
      "banco": "ITAU",
      "moneda": "USD"
    }

    ]
  });

  const handleOnChange = (e) => {
    setValuesUSer({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      setUser({
        ...user,
        token: Date.now().toString(),
      })
    );

    navigate(`/${PrivateRoutes.CAJAS}`, { replace: true });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" onChange={handleOnChange} required />
        <input
          type="password"
          name="password"
          onChange={handleOnChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
