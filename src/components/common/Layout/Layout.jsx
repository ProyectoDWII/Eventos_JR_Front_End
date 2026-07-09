import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import PwaInstallBanner from '../UI/PwaInstallBanner';

/**
 * Dynamic Layout Manager Component
 * Detects public vs dashboard routes and adjusts the structure accordingly.
 */
export default function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Detect dashboard paths
  const isDashboard =
    location.pathname.startsWith('/cliente') ||
    location.pathname.startsWith('/fotografo') ||
    location.pathname.startsWith('/admin');

  if (isDashboard) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col transition-colors duration-300">
        {/* Dashboard Navbar */}
        <Navbar onMenuToggle={() => setSidebarOpen(true)} />

        {/* Dashboard Frame */}
        <div className="flex-1 flex relative">
          {/* Dashboard Sidebar */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* Main Dashboard Panel */}
          <main className="flex-1 min-w-0 min-h-[calc(100vh-4rem)] p-6 lg:p-8 overflow-y-auto bg-zinc-50 dark:bg-zinc-950/40">
            <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Outlet />
            </div>
          </main>
        </div>

        {/* Banner de instalación PWA */}
        <PwaInstallBanner />
      </div>
    );
  }

  // Public/Marketing Layout
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col transition-colors duration-300">
      {/* Public Navbar */}
      <Navbar />

      {/* Main Page Area */}
      <main className="flex-grow flex flex-col">
        <div className="w-full flex-grow animate-in fade-in duration-200">
          <Outlet />
        </div>
      </main>

      {/* Public Footer */}
      <Footer />

      {/* Banner de instalación PWA */}
      <PwaInstallBanner />
    </div>
  );
}
