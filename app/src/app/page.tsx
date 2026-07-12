'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Boxes, LineChart, ShieldCheck, Zap, Globe, Cpu, BarChart3 } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <Nav />

      {/* Hero */}
      <section className="border-b border-ink-150 dark:border-ink-800 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pulse-200/40 to-pulse-400/20 dark:from-pulse-600/10 dark:to-pulse-800/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-pulse-100/30 to-transparent dark:from-pulse-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-wide mx-auto px-8 pt-24 pb-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-8 flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-pulse-600 animate-pulse-glow" />
            Pulse Commerce — v3.4
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-[clamp(48px,7vw,96px)] leading-[0.98] tracking-[-0.035em] font-normal max-w-[960px] mb-6 text-ink-900 dark:text-white"
          >
            Infraestructura de comercio para marcas que <em className="italic text-pulse-700 dark:text-pulse-400">avanzan</em>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl leading-snug text-ink-600 dark:text-ink-300 max-w-[640px] mb-10"
          >
            Un único sistema de registro para pedidos, inventario, clientes y tiendas —
            a través de cada canal y región en la que vendes.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3"
          >
            <Link href="/dashboard" className="btn btn-primary no-underline">
              Ver el dashboard <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn btn-secondary no-underline">
              Acerca del proyecto
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-wide mx-auto px-8 py-12 flex flex-wrap items-center justify-between gap-8"
        >
          <p className="text-sm text-ink-500 dark:text-ink-400">Confiado por minoristas que facturan +$50M al año</p>
          <div className="flex flex-wrap gap-12 items-center text-ink-400 dark:text-ink-500 font-display font-semibold text-xl tracking-tight">
            <span className="hover:text-ink-700 dark:hover:text-ink-200 transition-colors cursor-default">Northland</span>
            <span className="hover:text-ink-700 dark:hover:text-ink-200 transition-colors cursor-default">Mariner&amp;Co</span>
            <span className="hover:text-ink-700 dark:hover:text-ink-200 transition-colors cursor-default">Field Goods</span>
            <span className="hover:text-ink-700 dark:hover:text-ink-200 transition-colors cursor-default">Atlas Outfit</span>
            <span className="hover:text-ink-700 dark:hover:text-ink-200 transition-colors cursor-default">Heron</span>
            <span className="hover:text-ink-700 dark:hover:text-ink-200 transition-colors cursor-default">Quill</span>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="border-b border-ink-150 dark:border-ink-800 bg-white dark:bg-ink-950">
        <div className="max-w-wide mx-auto px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            La plataforma
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight max-w-[720px] mb-16 text-ink-900 dark:text-white"
          >
            Todo lo que necesitas para tu comercio, en un sistema contable seguro.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature
              icon={<Boxes size={20} />}
              title="Inventario unificado"
              body="Una única fuente de verdad a través de tiendas, almacenes y logística 3PL. En tiempo real."
              delay={0.2}
            />
            <Feature
              icon={<Zap size={20} />}
              title="Checkout ultra-rápido"
              body="Checkout renderizado en el borde en 32 regiones. Misma latencia para todos los compradores."
              delay={0.3}
            />
            <Feature
              icon={<LineChart size={20} />}
              title="Dashboards operativos"
              body="Números reales actualizados cada 30 segundos. Filtra, analiza y exporta sin un equipo de datos."
              delay={0.4}
            />
            <Feature
              icon={<ShieldCheck size={20} />}
              title="Pedidos asegurados"
              body="Cada pedido es de doble entrada. Reembolsos, intercambios y despachos siempre conciliados."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-ink-50 dark:bg-ink-900/30">
        <div className="max-w-wide mx-auto px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '$2.4B', label: 'Ventas procesadas' },
            { value: '41', label: 'Minoristas activos' },
            { value: '32', label: 'Regiones locales' },
            { value: '99.99%', label: 'SLA de tiempo activo' },
          ].map((s, i) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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

      {/* How it works */}
      <section className="border-b border-ink-150 dark:border-ink-800 bg-white dark:bg-ink-950">
        <div className="max-w-wide mx-auto px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Cómo funciona
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight max-w-[720px] mb-16 text-ink-900 dark:text-white"
          >
            De integración a lanzamiento en semanas, no meses.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu size={24} />, step: '01', title: 'Conecta', desc: 'Integra tu sistema actual. Soportamos +200 integraciones listas para usar — ERP, pagos y envíos.' },
              { icon: <Globe size={24} />, step: '02', title: 'Configura', desc: 'Configura tiendas, regiones, monedas y reglas de impuestos. Nuestro equipo se encarga del resto.' },
              { icon: <BarChart3 size={24} />, step: '03', title: 'Lanza', desc: 'Lanza tu sistema sin caídas. Dashboards en tiempo real desde el día uno. Escala a cualquier volumen.' },
            ].map((item, i) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-pulse-50 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-400 flex items-center justify-center mb-6 cursor-pointer"
                >
                  {item.icon}
                </motion.div>
                <div className="eyebrow text-pulse-600 dark:text-pulse-400 mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-ink-900 dark:text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-ink-600 dark:text-ink-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-900 dark:bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-pulse-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-wide mx-auto px-8 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-5xl tracking-tight font-normal mb-3">
              Listos cuando tú lo estés.
            </h2>
            <p className="text-ink-300 max-w-[480px]">
              Agendemos 30 minutos de análisis técnico. Equipo de migración incluido para ventas de +$100M GMV.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/dashboard" className="btn btn-primary no-underline">
              Abrir el dashboard <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Feature({ icon, title, body, delay }: { icon: React.ReactNode; title: string; body: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className={`border border-ink-150 dark:border-ink-800 rounded-lg p-6 bg-white dark:bg-ink-900`}
    >
      <div className="w-10 h-10 rounded-md bg-pulse-50 dark:bg-pulse-900/30 text-pulse-700 dark:text-pulse-400 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 tracking-snug text-ink-900 dark:text-white">{title}</h3>
      <p className="text-ink-600 dark:text-ink-300 leading-normal">{body}</p>
    </motion.div>
  );
}
