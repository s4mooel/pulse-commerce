import DashboardShell from '@/components/DashboardShell';
import { customers, currency, relativeDate } from '@/lib/data';
import { Plus } from 'lucide-react';

const TIER_COLORS: Record<string, string> = {
  vip: 'bg-pulse-600 text-white',
  loyal: 'bg-pulse-50 dark:bg-pulse-900/30 text-pulse-800 dark:text-pulse-200',
  returning: 'bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300',
  new: 'bg-info-bg text-info',
};

export default function CustomersPage() {
  return (
    <DashboardShell
      title="Customers"
      eyebrow={`${customers.length} customers`}
      actions={<button className="btn btn-primary"><Plus size={14} /> New customer</button>}
    >
      <div className="bg-white dark:bg-ink-900 border border-ink-150 dark:border-ink-800 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px]">
            <thead>
              <tr className="bg-ink-50 dark:bg-ink-950 border-b border-ink-150 dark:border-ink-800">
                {['Customer', 'Tier', 'Orders', 'LTV', 'Region', 'Last order'].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-ink-600 dark:text-ink-400 px-5 py-3 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id} className="border-b border-ink-100 dark:border-ink-800 last:border-0 hover:bg-ink-50 dark:hover:bg-ink-950">
                  <td className="px-5 py-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 text-xs flex items-center justify-center font-medium">
                        {c.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-medium text-ink-900 dark:text-white">{c.name}</div>
                        <div className="text-xs text-ink-500">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs uppercase tracking-wide font-medium ${TIER_COLORS[c.tier]}`}>
                      {c.tier}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm"><span className="numeric">{c.orders}</span></td>
                  <td className="px-5 py-4 text-sm"><span className="numeric font-medium">{currency(c.ltv)}</span></td>
                  <td className="px-5 py-4 text-sm text-ink-600 dark:text-ink-400">{c.region}</td>
                  <td className="px-5 py-4 text-sm text-ink-600 dark:text-ink-400">{relativeDate(c.lastOrder)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
