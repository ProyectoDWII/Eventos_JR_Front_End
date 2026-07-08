import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * SolicitudesPage - Panel de solicitudes de eventos para el fotógrafo
 */
export default function SolicitudesPage() {
  return (
    <DevelopmentPlaceholder
      title="Gestión de Solicitudes y Agenda"
      description="Visualiza todas las reservas de eventos pendientes enviadas por tus clientes. Acepta o rechaza fechas y genera contratos digitales automáticamente al autorizar coberturas."
      requiredEndpoints={[
        'GET /api/admin/applications (Ver todas las solicitudes del sistema)',
        'PATCH /api/admin/applications/:id/status (Aprobar o rechazar solicitud de fecha)',
        'POST /api/admin/contracts (Generar contrato asociado a la reserva aprobada)'
      ]}
    />
  );
}
