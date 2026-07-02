import React, { useState, useEffect } from 'react';

/**
 * PwaInstallBanner - Componente que gestiona e invita al usuario a instalar la PWA
 * utilizando el evento nativo beforeinstallprompt.
 */
export default function PwaInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user already dismissed the banner in this session
    const isDismissed = sessionStorage.getItem('pwa-install-dismissed');
    if (isDismissed) return;

    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      // Clear the deferredPrompt and hide the banner
      setDeferredPrompt(null);
      setIsVisible(false);
      console.log('Eventos JR ha sido instalada correctamente.');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // If already in standalone mode, don't show
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Usuario respondió a la instalación: ${outcome}`);

    // We've used the prompt, and can't use it again
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismissClick = () => {
    // Hide the banner and save the preference in sessionStorage to avoid annoying the user
    sessionStorage.setItem('pwa-install-dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Left Section: Icon & Info */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white font-black flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/10">
            JR
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 leading-snug">
              Instalar Eventos JR
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
              Disfruta de acceso directo, mejor rendimiento y soporte offline sin consumir almacenamiento.
            </p>
          </div>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={handleDismissClick}
            className="px-3.5 py-2 text-xs font-semibold text-zinc-500 hover:text-zinc-700 dark:text-zinc-450 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-805 rounded-xl transition duration-150 cursor-pointer"
          >
            Ahora No
          </button>
          <button
            onClick={handleInstallClick}
            className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition duration-150 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20 active:scale-95 cursor-pointer shrink-0"
          >
            Instalar
          </button>
        </div>

      </div>
    </div>
  );
}
