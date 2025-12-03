import { useContext } from "react";
import UserContext from "../contexts/UserContext.js";
import { Navigate } from "react-router";

export default function ProtectedRoute({ element: Component }) {
  const { isAuthenticated } = useContext(UserContext);

  return isAuthenticated ? <Component /> : <Navigate to="/admin/login" />;
}
