import { useEffect } from "react";
import { FormLogin } from "../components/resource-form/formLogin";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../hooks/useUserActions";
import { useCajaActions } from "../hooks/useCajaActions";
import { PublicRoutes } from "../Routes/routes";

export default function Login() {
  const navigate = useNavigate();
  const { refreshUser } = useUserActions();
  const { refreshCaja } = useCajaActions();

  useEffect(() => {
    refreshUser();
    refreshCaja();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  return <FormLogin />;
}
