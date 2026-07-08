import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * PersonalizarPage - Vista para personalizar paquetes
 */
export default function PersonalizarPage() {
  return (
    <DevelopmentPlaceholder
      title="Personalizar Paquete"
      description="Arma un paquete a la medida agregando servicios individuales o ajustando horas de cobertura fotográfica, impresiones, asistentes de video y locaciones extras."
      requiredEndpoints={[
        'POST /api/packages/custom (Generar cotización de paquete a medida)',
        'GET /api/services/categories (Filtrar catálogo por categoría)'
      ]}
    />
  );
}
