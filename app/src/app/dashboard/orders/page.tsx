import DashboardShell from '@/components/DashboardShell';
import { StatusPill } from '@/components/StatusPill';
import { orders, currency, relativeDate } from '@/lib/data';
import { Filter, Download } from 'lucide-react';
import { SimulatedButton } from '@/components/SimulatedButton';
import * as motion from 'framer-motion/client';

export default async function OrdersPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <DashboardShell
      title="Órdenes"
      eyebrow={`${orders.length} órdenes en total`}
      actions={
        <>
          <SimulatedButton className="btn btn-secondary" actionName="Filtrar"><Filter size={14} /> Filtrar</SimulatedButton>
          <SimulatedButton className="btn btn-secondary" actionName="Exportar"><Download size={14} /> Exportar</SimulatedButton>
          <SimulatedButton className="btn btn-primary" actionName="Nueva orden">Nueva orden</SimulatedButton>
        </>
      }
    >
      <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden">
        <div className="flex flex-wrap gap-1 px-3 py-3 border-b border-ink-150 dark:border-ink-800">
          {['Todas', 'Pagadas', 'Pendientes', 'Reembolsadas', 'Mayorista', 'POS'].map((t, i) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={t}
              className={`px-3 py-1.5 rounded-sm text-sm transition-colors ${
                i === 0
                  ? 'bg-ink-100 dark:bg-ink-800 text-ink-900 dark:text-white font-medium'
                  : 'text-ink-600 dark:text-ink-400 hover:bg-ink-50 dark:hover:bg-ink-800'
              }`}
            >
              {t}
            </motion.button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-ink-50 dark:bg-ink-950 border-b border-ink-150 dark:border-ink-800">
                {['Orden', 'Cliente', 'Canal', 'Región', 'Artículos', 'Total', 'Estado', 'Cuándo'].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-ink-600 dark:text-ink-400 px-5 py-3 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <motion.tbody variants={container} initial="hidden" animate="show">
              {orders.map((o) => (
                <motion.tr variants={item} key={o.id} className="border-b border-ink-100 dark:border-ink-800 last:border-0 hover:bg-ink-50 dark:hover:bg-ink-950 transition-colors">
                  <td className="px-5 py-3.5 text-sm"><span className="numeric font-medium">{o.id}</span></td>
                  <td className="px-5 py-3.5 text-sm">
                    <div className="font-medium">{o.customer.name}</div>
                    <div className="text-xs text-ink-500">{o.customer.email}</div>
                  </td>
                  <td className="px-5 py-3.5 text-sm capitalize text-ink-600 dark:text-ink-400">{o.channel}</td>
                  <td className="px-5 py-3.5 text-sm text-ink-600 dark:text-ink-400">{o.region}</td>
                  <td className="px-5 py-3.5 text-sm"><span className="numeric">{o.items}</span></td>
                  <td className="px-5 py-3.5 text-sm"><span className="numeric font-medium">{currency(o.total)}</span></td>
                  <td className="px-5 py-3.5 text-sm"><StatusPill status={o.status} /></td>
                  <td className="px-5 py-3.5 text-sm text-ink-600 dark:text-ink-400">{relativeDate(o.createdAt)}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
