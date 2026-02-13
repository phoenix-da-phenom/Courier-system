import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const PublicRoute = () => {
  const { user } = useAuth();
  const location = useLocation();

  // If user is logged in and tries to access /login, redirect to /dashboard
  if (user && location.pathname === "/login") {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, render the public route (login, register, etc.)
  return <Outlet />;
};

export default PublicRoute;
