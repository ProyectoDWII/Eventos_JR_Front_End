import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/common/Layout/Layout';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoute from './PrivateRoute';
import Unauthorized from '../pages/Auth/Unauthorized';

// Cliente pages
import ClienteDashboard from '../pages/Cliente/ClienteDashboard';
import ClienteServicios from '../pages/Cliente/ServiciosPage';
import ClientePaquetes from '../pages/Cliente/PaquetesPage';
import ClienteSolicitar from '../pages/Cliente/SolicitarPage';
import ClienteMisSolicitudes from '../pages/Cliente/MisSolicitudesPage';
import ClientePersonalizar from '../pages/Cliente/PersonalizarPage';

// Fotógrafo pages
import FotografoDashboard from '../pages/Fotografo/FotografoDashboard';
import FotografoServicios from '../pages/Fotografo/ServiciosPage';
import FotografoPaquetes from '../pages/Fotografo/PaquetesPage';
import FotografoSolicitudes from '../pages/Fotografo/SolicitudesPage';

// Admin pages
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminUsuarios from '../pages/Admin/UsuariosPage';
import AdminReportes from '../pages/Admin/ReportesPage';
import NotFound from '../pages/Error/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        {/* Protected Cliente Routes */}
        <Route path="/cliente" element={<PrivateRoute allowedRoles={['cliente']} />}>
          <Route path="dashboard" element={<ClienteDashboard />} />
          <Route path="servicios" element={<ClienteServicios />} />
          <Route path="paquetes" element={<ClientePaquetes />} />
          <Route path="solicitar" element={<ClienteSolicitar />} />
          <Route path="mis-solicitudes" element={<ClienteMisSolicitudes />} />
          <Route path="personalizar" element={<ClientePersonalizar />} />
        </Route>
        
        {/* Protected Fotógrafo Routes */}
        <Route path="/fotografo" element={<PrivateRoute allowedRoles={['fotografo']} />}>
          <Route path="dashboard" element={<FotografoDashboard />} />
          <Route path="servicios" element={<FotografoServicios />} />
          <Route path="paquetes" element={<FotografoPaquetes />} />
          <Route path="solicitudes" element={<FotografoSolicitudes />} />
        </Route>
        
        {/* Protected Admin Routes */}
        <Route path="/admin" element={<PrivateRoute allowedRoles={['admin']} />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="usuarios" element={<AdminUsuarios />} />
          <Route path="reportes" element={<AdminReportes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
