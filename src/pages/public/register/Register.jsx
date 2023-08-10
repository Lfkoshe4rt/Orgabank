import { useAppSelector } from "../../../hooks/store";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes } from "../../../Routes/routes";
import { useEffect } from "react";
import { FormRegister } from "../../../components/resource-form/formRegister";

const Register = () => {
  const navigate = useNavigate();
  const { token } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      navigate(`/${PrivateRoutes.CAJAS}`, { replace: true });
    }
  }, []);

  return <FormRegister />;
};

export default Register;
