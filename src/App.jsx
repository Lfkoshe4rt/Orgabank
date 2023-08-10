import { lazy, Suspense } from "react";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components/notFound";
import { Offline } from "./components/offline";
import AuthGuard from "./guard/auth.guard";
import { PrivateRoutes, PublicRoutes } from "./Routes/routes";
import { AuthToken } from "./components/authToken";

const Login = lazy(() => import("./pages/public/login/Login"));
const Private = lazy(() => import("./pages/private/Private"));
const Register = lazy(() => import("./pages/public/register/Register"));

function App() {
  return (
    <div className="App">
      <Offline>
        <AuthToken>
          <Suspense fallback={<div>Loading...</div>}>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.CAJAS} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />
              <Route element={<AuthGuard />}>
                <Route path={`/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </Suspense>
        </AuthToken>
      </Offline>
    </div>
  );
}

export default App;
