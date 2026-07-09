import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * MisSolicitudesPage - Listado de solicitudes hechas por el cliente
 */
export default function MisSolicitudesPage() {
  return (
    <DevelopmentPlaceholder
      title="Mis Solicitudes y Reservas"
      description="Consulta el estado de tus solicitudes enviadas (pendiente, aprobado, rechazado), descarga contratos asociados a tus fechas reservadas y realiza firmas electrónicas."
      requiredEndpoints={[
        'GET /api/applications/my-requests (Ver mis solicitudes de eventos)',
        'GET /api/contracts/my-contracts (Obtener mis contratos para firma)',
      ]}
    />
  );
}
