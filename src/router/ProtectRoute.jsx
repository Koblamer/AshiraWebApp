import { Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const ProtectedRoute = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const role = userData?.role;

  return role === "ADMIN" ? <AdminLayout /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
