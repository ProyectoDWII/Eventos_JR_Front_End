import React from 'react';

export default function AvisoPrivacidadPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Aviso de Privacidad Integral
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Última actualización: 1 de Julio de 2026 | Conforme a la LGPDPPSO
          </p>
        </div>
        <button
          onClick={handlePrint}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200 shadow-sm cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0a2.25 2.25 0 01-2.24 2.156H8.58A2.25 2.25 0 016.34 18m11.32 0h-11.3m0 0L3 10.5h18l-1.66 7.5zM6 10.5V6.75a3 3 0 013-3h6a3 3 0 013 3v3.75m-9-.75h.008v.008H9V9.75zm.56 0h.008v.008H9.56V9.75z" />
          </svg>
          Imprimir documento
        </button>
      </div>

      {/* Main Content */}
      <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-700 dark:text-zinc-300">
        
        <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">1</span>
            Responsable del Tratamiento
          </h2>
          <p className="leading-relaxed">
            <strong>Eventos JR</strong>, con domicilio para oír y recibir notificaciones en la Ciudad de México, México, es el responsable del tratamiento, uso y protección de los datos personales que usted nos proporcione, de conformidad con lo establecido en la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados/Particulares (LGPDPPSO).
          </p>
        </section>

        <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">2</span>
            Datos Personales Recabados
          </h2>
          <p className="mb-3">
            Para las finalidades señaladas en este aviso de privacidad, recabamos sus datos personales de forma directa cuando usted interactúa con nuestro portal web, se registra o nos contacta. Los datos que recopilamos incluyen:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Datos de Identificación:</strong> Nombre completo.</li>
            <li><strong>Datos de Contacto:</strong> Correo electrónico y número telefónico.</li>
            <li><strong>Datos de Autenticación:</strong> Contraseña cifrada (creada para registro de cuentas).</li>
            <li><strong>Información Adicional:</strong> Mensajes, dudas o requerimientos específicos de eventos.</li>
          </ul>
          <p className="mt-3 text-sm text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded-lg border border-yellow-200 dark:border-yellow-900/50">
            <strong>Nota:</strong> Eventos JR bajo ninguna circunstancia solicita ni da tratamiento a datos personales de carácter sensible (origen étnico, estado de salud, información genética, creencias religiosas, filosóficas o morales, afiliación sindical, opiniones políticas o preferencia sexual).
          </p>
        </section>

        <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">3</span>
            Finalidades del Tratamiento
          </h2>
          <p className="mb-3">
            Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades primarias y necesarias para el servicio:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-2">
            <li>Creación, gestión y administración de su cuenta de usuario (Clientes, Fotógrafos o Administradores).</li>
            <li>Responder a sus solicitudes de contacto, cotización de paquetes de eventos y aclaraciones.</li>
            <li>Coordinación de los servicios contratados de fotografía y organización de eventos.</li>
            <li>Dar cumplimiento a las obligaciones contractuales derivadas de los servicios prestados.</li>
          </ol>
        </section>

        <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">4</span>
            Derechos ARCO y Ejercicio de los Mismos
          </h2>
          <p className="mb-4">
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (<strong>Rectificación</strong>); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (<strong>Cancelación</strong>); así como oponerse al uso de sus datos personales para fines específicos (<strong>Oposición</strong>). Estos derechos se conocen como derechos ARCO.
          </p>
          <div className="bg-zinc-50 dark:bg-zinc-850 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 text-sm">
            <p className="font-semibold text-zinc-950 dark:text-zinc-50 mb-2">Procedimiento para ejercer sus derechos ARCO:</p>
            <p>
              Usted podrá ejercer sus derechos ARCO enviando una solicitud por escrito al correo electrónico oficial:
            </p>
            <p className="mt-2 text-indigo-600 dark:text-indigo-400 font-bold">
              privacidad@eventosjr.com
            </p>
            <p className="mt-2 leading-relaxed">
              La solicitud deberá contener: nombre completo del titular, documentos que acrediten su identidad, descripción clara y precisa de los datos personales sobre los que se busca ejercer alguno de los derechos ARCO, y cualquier otro elemento o documento que facilite la localización de los datos personales. Responderemos a su solicitud en un plazo máximo de 20 días hábiles.
            </p>
          </div>
        </section>

        <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">5</span>
            Transferencia de Datos
          </h2>
          <p className="leading-relaxed">
            Le informamos que Eventos JR no realiza transferencias de sus datos personales a terceros, nacionales o extranjeros, ajenos a la prestación de los servicios ofrecidos, salvo aquellas excepciones previstas en la ley o que sean necesarias para cumplir con los requerimientos legales de las autoridades competentes.
          </p>
        </section>

        <section className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">6</span>
            Modificaciones al Aviso de Privacidad
          </h2>
          <p className="leading-relaxed">
            Este aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, de nuestras propias necesidades por los servicios que ofrecemos, de nuestras prácticas de privacidad, o por otras causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir este aviso de privacidad a través de publicaciones en este mismo apartado de nuestro portal web.
          </p>
        </section>
      </div>
    </div>
  );
}
