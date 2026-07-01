'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulamos un retraso de red
    setTimeout(() => {
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-ink-50 dark:bg-ink-950 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-pulse-500/10 dark:bg-pulse-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 no-underline group z-10">
        <motion.span whileHover={{ scale: 1.2, rotate: 90 }} className="w-3 h-3 rounded-full bg-pulse-600" />
        <span className="font-display font-semibold tracking-tight text-xl text-ink-900 dark:text-white">Pulse</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md bg-white/70 dark:bg-ink-900/70 backdrop-blur-xl border border-white/20 dark:border-ink-800/50 p-8 rounded-2xl shadow-2xl z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-ink-900 dark:text-white mb-2">Bienvenido de nuevo</h1>
          <p className="text-sm text-ink-500 dark:text-ink-400">Ingresa tus credenciales para acceder al panel.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1">
            <label className="text-sm font-medium text-ink-700 dark:text-ink-300">Correo electrónico</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="email"
                defaultValue="demo@pulsecommerce.io"
                required
                className="w-full h-11 pl-10 pr-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-950 text-sm focus:outline-none focus:border-pulse-600 focus:ring-1 focus:ring-pulse-600 transition-shadow"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-ink-700 dark:text-ink-300">Contraseña</label>
              <span className="text-xs text-pulse-600 hover:text-pulse-700 cursor-pointer transition-colors">¿Olvidaste tu contraseña?</span>
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="password"
                defaultValue="••••••••"
                required
                className="w-full h-11 pl-10 pr-4 rounded-lg border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-950 text-sm focus:outline-none focus:border-pulse-600 focus:ring-1 focus:ring-pulse-600 transition-shadow"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-4 rounded-lg bg-pulse-600 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-pulse-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
              />
            ) : (
              <>
                Entrar al Dashboard <ArrowRight size={16} />
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center text-sm text-ink-500 dark:text-ink-400">
          ¿No tienes una cuenta? <span className="text-ink-900 dark:text-white font-medium hover:underline cursor-pointer">Solicita acceso</span>
        </div>
      </motion.div>
    </div>
  );
}
