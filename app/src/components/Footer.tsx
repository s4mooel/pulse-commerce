'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const PRODUCT_LINKS = [
    { label: 'Órdenes', href: `/dashboard/orders` },
    { label: 'Inventario', href: `/dashboard/inventory` },
    { label: 'Clientes', href: `/dashboard/customers` },
    { label: 'Analíticas', href: `/dashboard/analytics` },
  ];

  const COMPANY_LINKS = [
    { label: 'Acerca de', href: `/about` },
    { label: 'Contacto', href: `/contact` },
  ];

  const SOCIAL_LINKS = [
    { label: 'GitHub', href: 'https://github.com/s4mooel' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/s4m0l/' },
    { label: 'Email', href: 'mailto:zaratesamu99@gmail.com' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="border-t border-ink-150 dark:border-ink-800 bg-white dark:bg-ink-950 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-wide mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-8"
      >
        <motion.div variants={itemVariants} className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-pulse-600" />
            <span className="font-display font-semibold tracking-tight text-ink-900 dark:text-white">Pulse</span>
          </div>
          <p className="text-sm text-ink-500 dark:text-ink-400 max-w-[320px]">
            Simulador de plataforma e-commerce. Un proyecto de portafolio por Samuel Ibañez.
          </p>
        </motion.div>
        <FooterCol title="Producto" links={PRODUCT_LINKS} variants={itemVariants} />
        <FooterCol title="Proyecto" links={COMPANY_LINKS} variants={itemVariants} />
        <FooterCol title="Redes" links={SOCIAL_LINKS} variants={itemVariants} />
      </motion.div>
      <div className="border-t border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-6 flex justify-between text-xs text-ink-500 dark:text-ink-400">
          <span>© 2026 Pulse Commerce — Samuel Ibañez</span>
          <span>Proyecto de Portafolio</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, variants }: { title: string; links: { label: string; href: string }[], variants: any }) {
  return (
    <motion.div variants={variants}>
      <div className="eyebrow mb-4 text-2xs">{title}</div>
      <ul className="space-y-2 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="inline-block text-sm text-ink-700 dark:text-ink-300 no-underline hover:text-pulse-700 dark:hover:text-pulse-400 transition-colors"
            >
              <motion.span whileHover={{ x: 5 }} className="inline-block">
                {link.label}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
