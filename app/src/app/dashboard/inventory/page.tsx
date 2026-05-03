import DashboardShell from '@/components/DashboardShell';
import { products, currency } from '@/lib/data';
import { Plus, Filter } from 'lucide-react';

export default function InventoryPage() {
  const lowStock = products.filter((p) => p.stock < 50).length;
  return (
    <DashboardShell
      title="Inventory"
      eyebrow={`${products.length} products · ${lowStock} low stock`}
      actions={
        <>
          <button className="btn btn-secondary"><Filter size={14} /> Filter</button>
          <button className="btn btn-primary"><Plus size={14} /> New product</button>
        </>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden">
            <div
              className="aspect-[4/3] flex items-center justify-center"
              style={{ background: `oklch(0.85 0.05 ${p.imageHue})` }}
            >
              <span className="font-display font-semibold text-2xl text-ink-900/30">{p.name.split(' ')[0]}</span>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold truncate text-ink-900 dark:text-white">{p.name}</h3>
                  <div className="text-xs text-ink-500 numeric mt-0.5">{p.sku} · {p.category}</div>
                </div>
                <span className="numeric text-sm font-medium text-ink-900 dark:text-white whitespace-nowrap">{currency(p.price)}</span>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-ink-100 dark:border-ink-800">
                <div className="text-xs text-ink-600 dark:text-ink-400">
                  <span className="numeric font-medium text-ink-900 dark:text-white">{p.stock}</span> in stock
                  {p.reserved > 0 && <span className="text-ink-500"> · {p.reserved} reserved</span>}
                </div>
                {p.stock < 50 ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs bg-warning-bg text-warning">
                    <span className="w-1 h-1 rounded-full bg-warning" /> low
                  </span>
                ) : p.status === 'draft' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300">draft</span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200">
                    <span className="w-1 h-1 rounded-full bg-pulse-600" /> active
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
