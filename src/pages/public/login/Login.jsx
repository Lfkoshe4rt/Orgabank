import { useEffect } from "react";
import { FormLogin } from "../../../components/resource-form";
import { useNavigate } from "react-router-dom";
import { useUserActions } from "../../../hooks/useUserActions";
import { useCajaActions } from "../../../hooks/useCajaActions";
import { useMovementActions } from "../../../hooks/useMovementActions";
import { PublicRoutes } from "../../../Routes/routes";

export default function Login() {
  const navigate = useNavigate();
  const { refreshUser } = useUserActions();
  const { refreshCaja } = useCajaActions();
  const { refreshMovement } = useMovementActions();

  useEffect(() => {
    refreshUser();
    refreshCaja();
    refreshMovement();
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  return <FormLogin />;
}
