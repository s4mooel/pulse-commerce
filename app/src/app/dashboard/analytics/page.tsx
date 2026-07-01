'use client';

import DashboardShell from '@/components/DashboardShell';
import {
  RevenueLineChart,
  OrdersByChannelBar,
  RegionDoughnut,
  TopProductsBar,
  AnalyticsKPIs,
} from '@/components/AnalyticsCharts';
import { Download } from 'lucide-react';
import { SimulatedButton } from '@/components/SimulatedButton';
import { motion } from 'framer-motion';

export default function AnalyticsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <DashboardShell
      title="Analíticas"
      eyebrow="Últimos 12 meses"
      actions={
        <SimulatedButton className="btn btn-secondary" actionName="Exportar"><Download size={14} /> Exportar</SimulatedButton>
      }
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <AnalyticsKPIs />

        <motion.div variants={item} className="mt-8 bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-base font-semibold text-ink-900 dark:text-white">Ingresos a lo largo del tiempo</h2>
              <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">Ingresos mensuales de los últimos 12 meses</p>
            </div>
          </div>
          <div className="h-[320px]">
            <RevenueLineChart />
          </div>
        </motion.div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={item} className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-base font-semibold text-ink-900 dark:text-white mb-1">Órdenes por canal</h2>
            <p className="text-sm text-ink-500 dark:text-ink-400 mb-6">Distribución a través de canales de venta</p>
            <div className="h-[260px]">
              <OrdersByChannelBar />
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-base font-semibold text-ink-900 dark:text-white mb-1">Ingresos por región</h2>
            <p className="text-sm text-ink-500 dark:text-ink-400 mb-6">Distribución porcentual por zona geográfica</p>
            <div className="h-[260px]">
              <RegionDoughnut />
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="mt-6 bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-base font-semibold text-ink-900 dark:text-white mb-1">Mejores productos por ingresos</h2>
          <p className="text-sm text-ink-500 dark:text-ink-400 mb-6">Los productos con mejor rendimiento este periodo</p>
          <div className="h-[280px]">
            <TopProductsBar />
          </div>
        </motion.div>
      </motion.div>
    </DashboardShell>
  );
}
