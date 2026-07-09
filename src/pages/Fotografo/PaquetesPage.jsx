import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * PaquetesPage - Vista de gestión de paquetes para fotógrafos/administradores
 */
export default function PaquetesPage() {
  return (
    <DevelopmentPlaceholder
      title="Configurador de Paquetes Promocionales"
      description="Crea paquetes y promociones combinando tus servicios (ej. Cobertura Boda + Catering + Impresiones) y asigna descuentos globales o condiciones especiales de reserva."
      requiredEndpoints={[
        'POST /api/admin/packages (Crear nuevo paquete preestablecido)',
        'PUT /api/admin/packages/:id (Editar estructura del paquete)',
        'DELETE /api/admin/packages/:id (Dar de baja paquete promocional)',
      ]}
    />
  );
}
