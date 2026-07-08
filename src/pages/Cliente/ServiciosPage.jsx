import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * ServiciosPage - Vista de servicios para clientes
 */
export default function ServiciosPage() {
  return (
    <DevelopmentPlaceholder
      title="Catálogo de Servicios"
      description="Visualiza y conoce en detalle los servicios que ofrece el fotógrafo principal (cobertura fotográfica, catering, música, decoración, etc.) para armar tu paquete ideal."
      requiredEndpoints={[
        'GET /api/services (Obtener catálogo completo)',
        'GET /api/services/:id (Ver detalle del servicio)'
      ]}
    />
  );
}
