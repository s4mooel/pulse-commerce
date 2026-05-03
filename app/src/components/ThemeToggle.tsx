'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('pulse-theme') : null;
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('pulse-theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-900 flex items-center justify-center text-ink-600 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-800"
    >
      {dark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
