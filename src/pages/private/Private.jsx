import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "../../components/notFound";
import { PrivateRoutes } from "../../Routes/routes";

const Capital = lazy(() => import("./capital/Capital"));
const Cajas = lazy(() => import("./cajas/Cajas"));
const Reporte = lazy(() => import("./reporte/Reporte"));

export default function Private() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.CAJAS} />} />
        <Route path={PrivateRoutes.CAPITAL} element={<Capital />} />
        <Route path={PrivateRoutes.CAJAS} element={<Cajas />} />
        <Route path={PrivateRoutes.REPORTE} element={<Reporte />} />
      </RoutesWithNotFound>
    </>
  );
}
