import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/entrar" replace />;
}

