import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoute from './PrivateRoute';
import ClienteDashboard from '../pages/Cliente/ClienteDashboard';
import FotografoDashboard from '../pages/Fotografo/FotografoDashboard';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import NotFound from '../pages/Error/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Protected routes */}
      <Route path="/cliente" element={<PrivateRoute allowedRoles={['cliente']} />}>
        <Route path="dashboard" element={<ClienteDashboard />} />
      </Route>
      
      <Route path="/fotografo" element={<PrivateRoute allowedRoles={['fotografo']} />}>
        <Route path="dashboard" element={<FotografoDashboard />} />
      </Route>
      
      <Route path="/admin" element={<PrivateRoute allowedRoles={['admin']} />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
