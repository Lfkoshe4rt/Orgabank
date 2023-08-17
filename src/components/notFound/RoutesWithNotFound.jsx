import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default RoutesWithNotFound;
