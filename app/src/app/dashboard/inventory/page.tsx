import DashboardShell from '@/components/DashboardShell';
import { products, currency } from '@/lib/data';
import { Plus, Filter } from 'lucide-react';
import { SimulatedButton } from '@/components/SimulatedButton';
import * as motion from 'framer-motion/client';

export default async function InventoryPage() {
  const lowStock = products.filter((p) => p.stock < 50).length;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <DashboardShell
      title="Inventario"
      eyebrow={`${products.length} productos · ${lowStock} con bajo stock`}
      actions={
        <>
          <SimulatedButton className="btn btn-secondary" actionName="Filtrar"><Filter size={14} /> Filtrar</SimulatedButton>
          <SimulatedButton className="btn btn-primary" actionName="Nuevo producto"><Plus size={14} /> Nuevo producto</SimulatedButton>
        </>
      }
    >
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((p) => (
          <motion.div variants={item} whileHover={{ y: -5 }} key={p.id} className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden transition-shadow hover:shadow-lg cursor-pointer">
            <div
              className="aspect-[4/3] flex items-center justify-center transition-transform hover:scale-105 duration-500"
              style={{ background: `oklch(0.85 0.05 ${p.imageHue})` }}
            >
              <span className="font-display font-semibold text-2xl text-ink-900/30">{p.name.split(' ')[0]}</span>
            </div>
            <div className="p-4 bg-white dark:bg-ink-900 relative z-10">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold truncate text-ink-900 dark:text-white">{p.name}</h3>
                  <div className="text-xs text-ink-500 numeric mt-0.5">{p.sku} · {p.category}</div>
                </div>
                <span className="numeric text-sm font-medium text-ink-900 dark:text-white whitespace-nowrap">{currency(p.price)}</span>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink-100 dark:border-ink-800">
                <div className="text-xs text-ink-600 dark:text-ink-400">
                  <span className="numeric font-medium text-ink-900 dark:text-white">{p.stock}</span> en stock
                  {p.reserved > 0 && <span className="text-ink-500"> · {p.reserved} reservados</span>}
                </div>
                {p.stock < 50 ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs bg-warning-bg text-warning">
                    <span className="w-1 h-1 rounded-full bg-warning" /> bajo
                  </span>
                ) : p.status === 'draft' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300">borrador</span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200">
                    <span className="w-1 h-1 rounded-full bg-pulse-600" /> activo
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </DashboardShell>
  );
}
