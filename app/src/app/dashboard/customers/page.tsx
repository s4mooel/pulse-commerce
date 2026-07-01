import DashboardShell from '@/components/DashboardShell';
import { customers, currency, relativeDate } from '@/lib/data';
import { Plus } from 'lucide-react';
import { SimulatedButton } from '@/components/SimulatedButton';
import * as motion from 'framer-motion/client';

const TIER_COLORS: Record<string, string> = {
  vip: 'bg-pulse-600 text-white',
  loyal: 'bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200',
  returning: 'bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300',
  new: 'bg-info-bg text-info',
};

export default async function CustomersPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <DashboardShell
      title="Clientes"
      eyebrow={`${customers.length} clientes en total`}
      actions={<SimulatedButton className="btn btn-primary" actionName="Nuevo cliente"><Plus size={14} /> Nuevo cliente</SimulatedButton>}
    >
      <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="bg-ink-50 dark:bg-ink-950 border-b border-ink-150 dark:border-ink-800">
                {['Cliente', 'Nivel', 'Órdenes', 'LTV', 'Región', 'Última orden'].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-ink-600 dark:text-ink-400 px-5 py-3 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <motion.tbody variants={container} initial="hidden" animate="show">
              {customers.map((c) => (
                <motion.tr variants={item} key={c.id} className="border-b border-ink-100 dark:border-ink-800 last:border-0 hover:bg-ink-50 dark:hover:bg-ink-950 transition-colors">
                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 text-xs flex items-center justify-center font-medium transition-transform hover:scale-110">
                        {c.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-ink-900 dark:text-white">{c.name}</div>
                        <div className="text-xs text-ink-500">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <motion.span whileHover={{ scale: 1.05 }} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs uppercase tracking-wide font-medium ${TIER_COLORS[c.tier]}`}>
                      {c.tier}
                    </motion.span>
                  </td>
                  <td className="px-5 py-4 text-sm"><span className="numeric">{c.orders}</span></td>
                  <td className="px-5 py-4 text-sm"><span className="numeric font-medium">{currency(c.ltv)}</span></td>
                  <td className="px-5 py-4 text-sm text-ink-600 dark:text-ink-400">{c.region}</td>
                  <td className="px-5 py-4 text-sm text-ink-600 dark:text-ink-400">{relativeDate(c.lastOrder)}</td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
