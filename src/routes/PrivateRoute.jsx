import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ allowedRoles }) {
  const { state } = useAuth();

  if (!state?.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(state.user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}
