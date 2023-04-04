import { lazy, Suspense } from "react";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components/notFound";
import { Offline } from "./components/offline";
import AuthGuard from "./guard/auth.guard";
import { PrivateRoutes, PublicRoutes } from "./Routes/routes";

const Login = lazy(() => import("./pages/Login"));
const Private = lazy(() => import("./pages/private/Private"));

function App() {
  return (
    <div className="App">
      <Offline>
        <Suspense fallback={<div>Loading...</div>}>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.CAJAS} />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={`/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </Suspense>
      </Offline>
    </div>
  );
}

export default App;
