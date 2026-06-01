import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {

  const isAdmin =
    localStorage.getItem("adminAuth") === "true";

  return isAdmin
    ? children
    : <Navigate to="/secure-admin-login" />;
};

export default AdminProtectedRoute;