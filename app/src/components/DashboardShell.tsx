'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, ShoppingBag, Boxes, Users, BarChart3,
  Settings, Search, Bell, ChevronDown, Menu, X,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function DashboardShell({
  children,
  title,
  eyebrow,
  actions,
}: {
  children: React.ReactNode;
  title: string;
  eyebrow?: string;
  actions?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-ink-50 dark:bg-ink-950">
      {/* Sidebar — desktop */}
      <aside className="hidden md:flex w-60 bg-white dark:bg-ink-900 border-r border-ink-150 dark:border-ink-800 flex-col">
        <SidebarBrand />
        <SidebarNav pathname={pathname} />
      </aside>

      {/* Sidebar — mobile drawer */}
      {open && (
        <motion.div 
          key="mobile-drawer" 
          className="md:hidden fixed inset-0 z-50 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div 
            className="absolute inset-0 bg-ink-900/40" 
            onClick={() => setOpen(false)} 
          />
          <motion.aside 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-60 bg-white dark:bg-ink-900 flex flex-col"
          >
            <SidebarBrand onClose={() => setOpen(false)} />
            <SidebarNav pathname={pathname} onNav={() => setOpen(false)} />
          </motion.aside>
        </motion.div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-14 bg-white dark:bg-ink-900 border-b border-ink-150 dark:border-ink-800 flex items-center px-4 md:px-6 gap-3">
          <button
            className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-ink-700 dark:text-ink-300"
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </button>
          <div className="hidden sm:flex items-center gap-2 text-sm text-ink-500">
            <span>Northland</span>
            <span>/</span>
            <span className="text-ink-900 dark:text-white">{title}</span>
            <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pulse-100 text-pulse-700 dark:bg-pulse-900/50 dark:text-pulse-400 border border-pulse-200 dark:border-pulse-800">Demo</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative hidden lg:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                placeholder="Buscar órdenes, productos..."
                className="w-72 h-9 pl-9 pr-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm focus:outline-none focus:border-pulse-600 focus:shadow-[0_0_0_3px_rgba(5,150,105,0.15)]"
              />
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-9 h-9 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 flex items-center justify-center text-ink-600 dark:text-ink-300">
              <Bell size={16} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="h-9 px-3 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 flex items-center gap-2 text-sm">
              <div className="w-6 h-6 rounded-full bg-pulse-600 text-white text-xs flex items-center justify-center font-medium">S</div>
              <span className="hidden sm:inline">s4mooel</span>
              <ChevronDown size={14} className="text-ink-500" />
            </motion.button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
          >
            <div>
              {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}
              <h1 className="text-3xl font-semibold tracking-tight text-ink-900 dark:text-white">{title}</h1>
            </div>
            {actions && <div className="flex gap-2">{actions}</div>}
          </motion.div>
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarBrand({ onClose }: { onClose?: () => void }) {
  return (
    <Link
      href="/"
      className="h-14 px-4 flex items-center gap-2 border-b border-ink-150 dark:border-ink-800 no-underline"
    >
      <motion.span whileHover={{ scale: 1.2, rotate: 90 }} className="w-2 h-2 rounded-full bg-pulse-600" />
      <span className="font-display font-semibold tracking-tight text-ink-900 dark:text-white">Pulse</span>
      <span className="ml-auto text-xs text-ink-500">Northland</span>
      {onClose && (
        <button onClick={onClose} className="ml-2 text-ink-500" aria-label="Cerrar menú">
          <X size={16} />
        </button>
      )}
    </Link>
  );
}

function SidebarNav({
  pathname,
  onNav,
}: {
  pathname: string;
  onNav?: () => void;
}) {
  const NAV = [
    { href: `/dashboard`, icon: LayoutDashboard, label: 'Resumen' },
    { href: `/dashboard/orders`, icon: ShoppingBag, label: 'Órdenes', badge: '24' },
    { href: `/dashboard/inventory`, icon: Boxes, label: 'Inventario' },
    { href: `/dashboard/customers`, icon: Users, label: 'Clientes' },
    { href: `/dashboard/analytics`, icon: BarChart3, label: 'Analíticas' },
    { href: `/dashboard/settings`, icon: Settings, label: 'Ajustes' },
  ];

  return (
    <nav className="p-2 flex flex-col gap-0.5">
      {NAV.map((it) => {
        const active = pathname === it.href || (it.href !== `/dashboard` && pathname.startsWith(it.href));
        const Icon = it.icon;
        return (
          <Link
            key={it.href}
            href={it.href}
            onClick={onNav}
            className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm no-underline transition-colors ${
              active
                ? 'bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200 font-medium'
                : 'text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800'
            }`}
          >
            <Icon size={16} />
            <motion.span whileHover={{ x: 5 }}>{it.label}</motion.span>
            {it.badge && (
              <span className="ml-auto text-2xs font-mono bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 px-1.5 py-0.5 rounded-xs">
                {it.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
