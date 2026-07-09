import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * PaquetesPage - Vista de paquetes para clientes
 */
export default function PaquetesPage() {
  return (
    <DevelopmentPlaceholder
      title="Paquetes de Cobertura"
      description="Explora los paquetes preestablecidos de fotografía y video (Básico, Premium, VIP) con tarifas integradas, servicios incluidos y opciones de personalización."
      requiredEndpoints={[
        'GET /api/packages (Obtener paquetes disponibles)',
        'GET /api/packages/:id (Ver detalle del paquete)',
      ]}
    />
  );
}
