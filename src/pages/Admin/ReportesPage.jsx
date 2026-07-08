import React from 'react';
import DevelopmentPlaceholder from '../../components/common/UI/DevelopmentPlaceholder';

/**
 * ReportesPage - Panel de estadísticas y reportes de negocio
 */
export default function ReportesPage() {
  return (
    <DevelopmentPlaceholder
      title="Reportes Financieros y Métricas"
      description="Visualiza reportes detallados de ingresos mensuales, estado de los contratos vigentes, índice de conversión de solicitudes de clientes y métricas de servicios más cotizados."
      requiredEndpoints={[
        'GET /api/admin/reports/sales (Estadísticas financieras de ventas)',
        'GET /api/admin/reports/conversion (Métricas de reservas y solicitudes)',
        'GET /api/admin/reports/popular-services (Servicios de mayor demanda)'
      ]}
    />
  );
}
