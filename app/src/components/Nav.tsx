'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <nav className="border-b border-ink-150 dark:border-ink-800 bg-white/80 dark:bg-ink-950/80 glass sticky top-0 z-50">
      <div className="max-w-wide mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <motion.span 
            whileHover={{ scale: 1.2, rotate: 90 }}
            className="w-2 h-2 rounded-full bg-pulse-600 transition-transform" 
          />
          <span className="font-display font-semibold tracking-tight text-base text-ink-900 dark:text-white">Pulse</span>
        </Link>
        <div className="flex items-center gap-1 text-sm">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/about" className="hidden sm:inline-flex px-3 py-2 rounded-md text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 no-underline transition-colors">
              Acerca de
            </Link>
          </motion.div>
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/dashboard" className="ml-2 btn btn-primary h-9 px-4 text-sm no-underline">
              Dashboard
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
