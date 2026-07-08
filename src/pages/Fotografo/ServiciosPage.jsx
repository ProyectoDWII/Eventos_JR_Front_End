import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * ServiciosPage - Vista de gestión de servicios para fotógrafos/administradores
 */
export default function ServiciosPage() {
  return (
    <DevelopmentPlaceholder
      title="Gestión de Servicios Ofrecidos"
      description="Como fotógrafo principal y administrador, aquí podrás dar de alta, editar y eliminar servicios de tu portafolio, así como asignar precios y categorías específicas."
      requiredEndpoints={[
        'POST /api/admin/services (Crear nuevo servicio de catálogo)',
        'PUT /api/admin/services/:id (Editar servicio existente)',
        'DELETE /api/admin/services/:id (Eliminar servicio del catálogo)'
      ]}
    />
  );
}
