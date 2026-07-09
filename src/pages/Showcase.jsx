import React, { useState } from 'react';
import Button from '../components/common/UI/Button';
import Input from '../components/common/UI/Input';
import Card from '../components/common/UI/Card';
import Modal from '../components/common/UI/Modal';
import Alert from '../components/common/UI/Alert';
import Badge from '../components/common/UI/Badge';
import Spinner from '../components/common/UI/Spinner';
import Select from '../components/common/UI/Select';
import Pagination from '../components/common/UI/Pagination';

/**
 * Showcase component demonstrating all base UI components in action
 */
export default function Showcase() {
  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState('md');

  // Input states
  const [textVal, setTextVal] = useState('');
  const [errorVal, setErrorVal] = useState('Este campo tiene un error');

  // Select states
  const [selectedRole, setSelectedRole] = useState('fotografo');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);

  // Alert toggle states
  const [showAlerts, setShowAlerts] = useState({
    success: true,
    error: true,
    warning: true,
    info: true,
  });

  const openModal = (size) => {
    setModalSize(size);
    setModalOpen(true);
  };

  const handleAlertClose = (key) => {
    setShowAlerts((prev) => ({ ...prev, [key]: false }));
  };

  const resetAlerts = () => {
    setShowAlerts({ success: true, error: true, warning: true, info: true });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans space-y-16">
      {/* Page Title */}
      <div className="border-b border-zinc-200/60 dark:border-zinc-800/60 pb-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Showcase de Componentes UI
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">
            Librería de componentes responsivos, accesibles y adaptados a modo
            oscuro para Eventos JR.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50">
          <span>Componentes: 9 / 9</span>
        </div>
      </div>

      {/* 1. BUTTONS SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          1. Botones (Button)
        </h2>
        <Card
          title="Variantes y Tamaños de Botón"
          subtitle="Diferentes estilos visuales e interacciones."
        >
          <div className="space-y-6">
            {/* Variants */}
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Variantes
              </h4>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="link">Link Button</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Tamaños
              </h4>
              <div className="flex flex-wrap gap-3 items-end">
                <Button size="sm">Pequeño (sm)</Button>
                <Button size="md">Mediano (md)</Button>
                <Button size="lg">Grande (lg)</Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Estados
              </h4>
              <div className="flex flex-wrap gap-3 items-center">
                <Button loading variant="primary">
                  Guardando
                </Button>
                <Button loading variant="outline">
                  Procesando
                </Button>
                <Button disabled variant="primary">
                  Deshabilitado
                </Button>
                <Button
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  }
                >
                  Con Icono
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 2. INPUTS SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          2. Inputs
        </h2>
        <Card
          title="Entradas de Texto (Input)"
          subtitle="Componentes de formulario con validación y estados."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="Nombre Completo"
              placeholder="Ej. Diego Pardo"
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
              required
            />

            <Input
              label="Correo con Error"
              type="email"
              placeholder="incompleto@"
              value="correo-incorrecto"
              error={errorVal}
              onChange={(e) =>
                setErrorVal(
                  e.target.value ? '' : 'Este campo no puede estar vacío'
                )
              }
            />

            <Input
              label="Búsqueda con Icono"
              placeholder="Buscar fotógrafo..."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21-21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.602Z"
                  />
                </svg>
              }
            />

            <Input
              label="Campo Deshabilitado"
              placeholder="No editable"
              disabled
              value="Texto deshabilitado"
            />
          </div>
        </Card>
      </section>

      {/* 3. SELECT SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          3. Selector (Select)
        </h2>
        <Card
          title="Componente Select"
          subtitle="Lista desplegable responsiva con opciones dinámicas."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <Select
              label="Rol de Usuario"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              options={[
                { value: 'cliente', label: 'Cliente de Eventos' },
                { value: 'fotografo', label: 'Fotógrafo Profesional' },
                { value: 'admin', label: 'Administrador del Portal' },
              ]}
              required
            />

            <Select
              label="Select Deshabilitado"
              value="1"
              disabled
              options={[{ value: '1', label: 'Opción Única' }]}
            />
          </div>
        </Card>
      </section>

      {/* 4. CARDS SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          4. Tarjetas (Card)
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Tarjeta Básica" subtitle="Sin pie de página">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Esta es una tarjeta simple. Contiene un encabezado con título, un
              subtítulo descriptivo y este bloque de cuerpo para tu contenido.
            </p>
          </Card>

          <Card
            title="Tarjeta Completa"
            subtitle="Con slots extras"
            headerExtra={<Badge variant="success">Activo</Badge>}
            footer={
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Actualizado ayer</span>
                <Button variant="link" size="sm">
                  Ver más
                </Button>
              </div>
            }
          >
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Esta tarjeta demuestra el uso del slot `headerExtra` a la derecha
              del título, y un pie de página (`footer`) con estilo integrado.
            </p>
          </Card>

          <Card
            title="Tarjeta Hoverable"
            subtitle="Efecto de elevación interactivo"
            hoverable
          >
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Pasa el cursor sobre esta tarjeta para ver cómo se eleva
              suavemente y realza su borde. Ideal para elementos interactivos o
              menús.
            </p>
          </Card>
        </div>
      </section>

      {/* 5. MODALS SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          5. Ventanas Modales (Modal)
        </h2>
        <Card
          title="Modales Interactivos"
          subtitle="Diálogos con overlay y cierres configurables. Habilitado cierre con tecla Escape y clic afuera."
        >
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => openModal('sm')} variant="outline">
              Modal Chico (sm)
            </Button>
            <Button onClick={() => openModal('md')} variant="outline">
              Modal Mediano (md)
            </Button>
            <Button onClick={() => openModal('lg')} variant="outline">
              Modal Grande (lg)
            </Button>
          </div>
        </Card>

        {/* Modal rendering */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={`Modal Demostración (${modalSize.toUpperCase()})`}
          size={modalSize}
          footer={
            <>
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => setModalOpen(false)}>
                Aceptar
              </Button>
            </>
          }
        >
          <div className="space-y-3">
            <p>
              Este es el cuerpo del modal renderizado de forma dinámica en
              tamaño <strong>{modalSize}</strong>.
            </p>
            <p className="text-zinc-500 text-xs">
              Puedes cerrar esta ventana haciendo clic en los botones del pie de
              página, presionando la tecla <strong>ESC</strong>, haciendo clic
              en el icono "X" superior, o haciendo clic sobre el fondo
              translúcido (overlay).
            </p>
          </div>
        </Modal>
      </section>

      {/* 6. ALERTS SECTION */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
            6. Alertas (Alert)
          </h2>
          <Button variant="link" size="sm" onClick={resetAlerts}>
            Restaurar Alertas
          </Button>
        </div>
        <div className="space-y-4">
          {showAlerts.success && (
            <Alert
              type="success"
              title="Operación Exitosa"
              message="El paquete de fotografía se ha guardado correctamente en la base de datos."
              onClose={() => handleAlertClose('success')}
            />
          )}
          {showAlerts.error && (
            <Alert
              type="error"
              title="Error del Sistema"
              message="No se pudo procesar la solicitud. Por favor comprueba tu conexión a internet e inténtalo más tarde."
              onClose={() => handleAlertClose('error')}
            />
          )}
          {showAlerts.warning && (
            <Alert
              type="warning"
              title="Advertencia de Límite"
              message="Te quedan pocas imágenes en la cuota de descarga de este mes. Considera mejorar tu plan."
              onClose={() => handleAlertClose('warning')}
            />
          )}
          {showAlerts.info && (
            <Alert
              type="info"
              title="Información"
              message="El fotógrafo Juan Díaz ha subido nuevas muestras a su portafolio."
              onClose={() => handleAlertClose('info')}
            />
          )}
        </div>
      </section>

      {/* 7. BADGES SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          7. Etiquetas (Badge)
        </h2>
        <Card
          title="Estados en Badges"
          subtitle="Píldoras de colores para indicar estados o categorías."
        >
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Variantes de Estado
              </h4>
              <div className="flex flex-wrap gap-3">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Completado</Badge>
                <Badge variant="warning">Pendiente</Badge>
                <Badge variant="danger">Cancelado</Badge>
                <Badge variant="info">En proceso</Badge>
                <Badge variant="gray">Inactivo</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                Tamaños
              </h4>
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="success" size="sm">
                  Pequeño (sm)
                </Badge>
                <Badge variant="success" size="md">
                  Mediano (md)
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* 8. SPINNERS SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          8. Indicadores de Carga (Spinner)
        </h2>
        <Card
          title="Spinner SVG Animado"
          subtitle="Diferentes tamaños y colores para cargas asíncronas."
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-2 justify-center">
              <Spinner size="sm" />
              <span className="text-xs text-zinc-400">Chico (sm)</span>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-2 justify-center">
              <Spinner size="md" />
              <span className="text-xs text-zinc-400">Medio (md)</span>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-2 justify-center">
              <Spinner size="lg" />
              <span className="text-xs text-zinc-400">Grande (lg)</span>
            </div>
            <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 flex flex-col items-center gap-2 justify-center">
              <Spinner size="xl" />
              <span className="text-xs text-zinc-400">Extra Grande (xl)</span>
            </div>
          </div>
        </Card>
      </section>

      {/* 9. PAGINATION SECTION */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold tracking-tight border-l-4 border-primary pl-3">
          9. Paginación (Pagination)
        </h2>
        <Card
          title="Paginación Interactiva"
          subtitle={`Visualización de páginas. Página seleccionada actualmente: ${currentPage}`}
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 text-center">
                Paginador con Ventana (Total: 10 páginas)
              </h4>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            <div className="border-t border-zinc-100 dark:border-zinc-800 pt-6">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 text-center">
                Paginador Chico (Total: 3 páginas)
              </h4>
              <Pagination
                currentPage={currentPage > 3 ? 3 : currentPage}
                totalPages={3}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
