import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { PublicRoutes } from "../Routes/routes";
import { Container } from "./styled";

const PrivateValidationFragment = (
  <>
    <Navbar />
    <Container >
      <Outlet />
    </Container>
  </>
);

const PublicValidationFragment = (
  <Navigate replace to={PublicRoutes.LOGIN} />
);

export const AuthGuard = () => {
  const { token } = useSelector((state) => state.user);
  return token ? (
    PrivateValidationFragment
  ) : (
    PublicValidationFragment
  )
}


export default AuthGuard;
