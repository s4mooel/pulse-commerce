import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Code, Layout, Zap, GitBranch } from 'lucide-react';
import * as motion from 'framer-motion/client';

const TIMELINE = [
  { year: 'Fase 1', title: 'Sistema de Diseño', desc: 'Creación de tokens CSS y componentes base en Tailwind para asegurar consistencia visual.' },
  { year: 'Fase 2', title: 'Estructura UI', desc: 'Desarrollo de las 4 interfaces principales (Marketing, Dashboard, Storefront, Admin).' },
  { year: 'Fase 3', title: 'Next.js 14', desc: 'Migración del UI kit estático a una aplicación Next.js con App Router y componentes de React.' },
  { year: 'Fase 4', title: 'Simulación de Datos', desc: 'Integración de un modelo de datos ficticios (Mock Data) para dar vida a las tablas y métricas.' },
  { year: 'Hoy', title: 'Portafolio Activo', desc: 'Proyecto completado como una demostración interactiva de habilidades frontend y arquitectura.' },
];

const TEAM = [
  { name: 'Samuel Ibañez', role: 'Frontend Developer', initials: 'SI', hue: 156 },
];

export default function AboutPage() {
  const VALUES = [
    { icon: <Zap size={22} />, title: 'Rendimiento', desc: 'Uso de Next.js y Server Components para carga rápida y generación estática de páginas.' },
    { icon: <Layout size={22} />, title: 'UI/UX Moderna', desc: 'Implementación de un diseño limpio, responsivo y modo oscuro completamente funcional.' },
    { icon: <Code size={22} />, title: 'Código Limpio', desc: 'Estructura escalable, uso intensivo de TypeScript para prevenir errores y componentes reutilizables.' },
    { icon: <GitBranch size={22} />, title: 'Arquitectura', desc: 'Preparado para el mundo real: separación clara entre capa de presentación y capa de datos.' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <Nav />

      {/* Hero */}
      <section className="border-b border-ink-150 dark:border-ink-800 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pulse-200/40 to-pulse-400/20 dark:from-pulse-600/10 dark:to-pulse-800/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-wide mx-auto px-8 pt-20 pb-16 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-6">El Proyecto</motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl tracking-tight font-normal text-ink-900 dark:text-white mb-6 max-w-3xl"
          >
            Construyendo el <em className="italic text-pulse-700 dark:text-pulse-400">sistema operativo</em> del e-commerce moderno.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg text-ink-600 dark:text-ink-300 max-w-xl"
          >
            Pulse Commerce es un simulador de plataforma que demuestra interfaces de usuario complejas, arquitecturas escalables y diseño moderno aplicado a paneles de control intensivos en datos.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="max-w-wide mx-auto px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 'Next.js', label: 'Framework' },
            { value: 'Tailwind', label: 'Estilos' },
            { value: 'TypeScript', label: 'Lenguaje' },
            { value: '100%', label: 'Responsivo' },
          ].map((s, i) => (
            <motion.div 
              key={s.label} 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="numeric text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-2">{s.value}</div>
              <div className="text-sm text-ink-500 dark:text-ink-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-4">El Proceso</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-16">Cómo fue construido</motion.h2>
          <div className="grid gap-0 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-700" />
            {TIMELINE.map((item, i) => (
              <motion.div 
                key={item.year} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 pb-10 last:pb-0"
              >
                <div className="relative">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold z-10 relative cursor-pointer ${
                    i === TIMELINE.length - 1
                      ? 'bg-pulse-600 text-white shadow-[0_0_0_4px_var(--bg-white)] dark:shadow-[0_0_0_4px_var(--bg-ink-950)]'
                      : 'bg-white dark:bg-ink-900 border-2 border-ink-200 dark:border-ink-700 text-ink-600 dark:text-ink-400'
                  }`}>
                    {i + 1}
                  </motion.div>
                </div>
                <div className="pt-2">
                  <div className="text-sm font-medium text-pulse-700 dark:text-pulse-400 mb-1">{item.year}</div>
                  <h3 className="text-lg font-semibold text-ink-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-ink-600 dark:text-ink-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-white dark:bg-ink-950">
        <div className="max-w-wide mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-4">Tecnología</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-16">Principios de Ingeniería</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div 
                key={v.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="border border-ink-150 dark:border-ink-800 rounded-lg p-6 bg-white dark:bg-ink-900 transition-shadow hover:shadow-lg cursor-pointer"
              >
                <div className="w-10 h-10 rounded-md bg-pulse-50 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-400 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white mb-2 tracking-snug">{v.title}</h3>
                <p className="text-ink-600 dark:text-ink-300 leading-normal">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-ink-150 dark:border-ink-800">
        <div className="max-w-wide mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow mb-4">Desarrollador</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-semibold tracking-tight text-ink-900 dark:text-white mb-16">Sobre mí</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TEAM.map((t) => (
              <motion.div 
                key={t.name} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="w-full aspect-square rounded-xl flex items-center justify-center mb-4 cursor-pointer"
                  style={{ background: `oklch(0.85 0.06 ${t.hue})` }}
                >
                  <span className="font-display font-bold text-3xl text-ink-900/30">{t.initials}</span>
                </motion.div>
                <div className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 dark:bg-ink-950 text-white overflow-hidden">
        <div className="max-w-wide mx-auto px-8 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-5xl tracking-tight font-normal mb-3">¿Te gustaría colaborar?</h2>
            <p className="text-ink-300 max-w-[480px]">Revisa mi GitHub para ver el código fuente o contáctame en LinkedIn para oportunidades de trabajo.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}>
            <Link href="/login" className="btn btn-primary no-underline">
              Explorar el Dashboard <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
