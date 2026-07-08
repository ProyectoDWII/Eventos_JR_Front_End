import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * SolicitarPage - Vista para crear solicitudes de cobertura
 */
export default function SolicitarPage() {
  return (
    <DevelopmentPlaceholder
      title="Solicitar Cobertura de Evento"
      description="Reserva la fecha de tu evento (graduación, boda, fiesta) seleccionando un paquete, la locación del evento y especificando detalles del contrato de cobertura."
      requiredEndpoints={[
        'POST /api/applications (Crear nueva solicitud de reserva)',
        'GET /api/applications/check-availability (Comprobar disponibilidad de fecha)'
      ]}
    />
  );
}
